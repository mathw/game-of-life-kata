use std::str::FromStr;

#[derive(Debug, Clone)]
pub struct Board {
    cells: Vec<bool>,
    rows: usize,
    columns: usize,
}

impl Board {
    pub fn new(width: usize, height: usize) -> Board {
        let mut cells = Vec::new();
        for _ in 0..(width * height) {
            cells.push(false);
        }

        Board {
            cells: cells,
            rows: height,
            columns: width,
        }
    }

    pub fn width(&self) -> usize {
        self.columns
    }

    pub fn height(&self) -> usize {
        self.rows
    }

    pub fn get_cell(&self, x: usize, y: usize) -> Option<bool> {
        let index = self.index_of(x, y)?;
        Some(self.cells[index])
    }

    pub fn set_cell(&mut self, x: usize, y: usize, value: bool) -> bool {
        let index = self.index_of(x, y);
        match index {
            None => false,
            Some(i) => {
                self.cells[i] = value;
                true
            }
        }
    }

    pub fn count_live_around(&self, x: usize, y: usize) -> Option<usize> {
        let _ = self.index_of(x, y)?;

        let coords_around = self.coords_around(x, y);

        Some(
            coords_around
                .iter()
                .map(|&(xx, yy)| if self.get_cell(xx, yy).unwrap() { 1 } else { 0 })
                .sum(),
        )
    }

    fn coords_around(&self, x: usize, y: usize) -> Vec<(usize, usize)> {
        let mut coords = Vec::new();

        if x > 0 {
            coords.push((x - 1, y));
            if y > 0 {
                coords.push((x - 1, y - 1));
            }
            if y < self.max_y() {
                coords.push((x - 1, y + 1));
            }
        }

        if x < self.max_x() {
            coords.push((x + 1, y));
            if y > 0 {
                coords.push((x + 1, y - 1));
            }
            if y < self.max_y() {
                coords.push((x + 1, y + 1));
            }
        }

        if y > 0 {
            coords.push((x, y - 1));
        }

        if y < self.max_y() {
            coords.push((x, y + 1));
        }

        coords
    }

    fn max_y(&self) -> usize {
        self.rows - 1
    }

    fn max_x(&self) -> usize {
        self.columns - 1
    }

    fn index_of(&self, x: usize, y: usize) -> Option<usize> {
        let index = (self.columns * y) + x;
        if index < self.cells.len() {
            Some(index)
        } else {
            None
        }
    }
}

impl FromStr for Board {
    type Err = String;

    fn from_str(input: &str) -> Result<Board, String> {
        let lines = input.lines().collect::<Vec<_>>();
        let (width, height) = parse_first_line(lines[0])?;
        let mut board = Board::new(width, height);

        for line in 0..height {
            let thisline = lines[line + 1];
            if thisline.len() != width {
                return Err(format!(
                    "Line width {} was not the expected width {}",
                    thisline.len(),
                    width
                ));
            }
            for (c, x) in thisline.chars().zip(0..width) {
                if c == '*' {
                    board.set_cell(x, line, true);
                }
            }
        }

        Ok(board)
    }
}

impl ToString for Board {
    fn to_string(&self) -> String {
        let mut lines = Vec::new();
        lines.push(format!("{} {}\n", self.rows, self.columns));

        for y in 0..self.rows {
            let mut row = Vec::new();
            for x in 0..self.columns {
                if self.get_cell(x, y).unwrap() {
                    row.push('*');
                } else {
                    row.push('.');
                }
            }
            row.push('\n');
            lines.push(row.iter().collect());
        }

        lines.concat()
    }
}

fn parse_first_line(line: &str) -> Result<(usize, usize), String> {
    let parts = line.split(' ').collect::<Vec<_>>();
    if parts.len() != 2 {
        return Err(format!("First line '{}' did not have two parts", line));
    }

    let height =
        usize::from_str(parts[0]).map_err(|_| format!("Couldn't parse '{}' as usize", parts[0]))?;
    let width =
        usize::from_str(parts[1]).map_err(|_| format!("Couldn't parse '{}' as usize", parts[1]))?;
    Ok((width, height))
}

#[test]
fn test_new_board_three_by_four() {
    let board = Board::new(3, 4);

    assert_eq!(4, board.rows);
    assert_eq!(3, board.columns);
    assert_eq!(12, board.cells.len());
    assert_eq!(true, board.cells.iter().all(|&x| x == false));
}

#[test]
fn test_set_cell() {
    let mut board = Board::new(2, 2);

    assert_eq!(Some(false), board.get_cell(1, 1));
    assert_eq!(true, board.set_cell(1, 1, true));
    assert_eq!(Some(true), board.get_cell(1, 1));
    assert_eq!(false, board.set_cell(4, 3, true));
}

#[test]
fn test_parse_board() {
    let input = "4 8
........
....*...
...**...
........";

    let board = Board::from_str(input);

    assert_eq!(
        true,
        board.is_ok(),
        "Board did not parse successfully. {}",
        board.unwrap_err()
    );
    let board = board.unwrap();
    assert_eq!(4, board.rows);
    assert_eq!(8, board.columns);
    assert_eq!(Some(true), board.get_cell(4, 1));
    assert_eq!(Some(false), board.get_cell(5, 1));
}

#[test]
fn test_render_board() {
    let input = "4 8
........
....*...
...**...
........
";

    let board = Board::from_str(input).unwrap();

    let output = board.to_string();

    assert_eq!(input.to_owned(), output);
}

#[test]
fn test_count_live_around() {
    let input = "4 8
........
....*...
...**...
........
";

    let board = Board::from_str(input).unwrap();

    assert_eq!(Some(2), board.count_live_around(4, 1));
    assert_eq!(Some(0), board.count_live_around(0, 0));
}
