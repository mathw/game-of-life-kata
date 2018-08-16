use super::board::Board;

pub trait Steppable {
    fn step(&self) -> Self;
}

impl Steppable for Board {
    fn step(&self) -> Board {
        let mut new_board = self.clone();

        for x in 0..self.width() {
            for y in 0..self.height() {
                match self.count_live_around(x, y) {
                    Some(count) => {
                        let current = self.get_cell(x, y).unwrap();
                        new_board.set_cell(x, y, cell_outcome(current, count));
                    }
                    None => (),
                }
            }
        }

        new_board
    }
}

fn cell_outcome(currently_alive: bool, live_neighbours: usize) -> bool {
    if currently_alive {
        if live_neighbours < 2 {
            false
        } else if live_neighbours > 3 {
            false
        } else {
            true
        }
    } else {
        if live_neighbours == 3 {
            true
        } else {
            false
        }
    }
}

#[test]
fn test_iterate_board() {
    use std::str::FromStr;
    let input = "4 8
........
....*...
...**...
........
";

    let board = Board::from_str(input).unwrap();

    let new_board = board.step();

    assert_eq!(
        new_board.to_string(),
        "4 8
........
...**...
...**...
........
"
    );
}

#[test]
fn test_iterate_board_stable() {
    use std::str::FromStr;
    let input = "4 8
........
...**...
...**...
........
";

    let board = Board::from_str(input).unwrap();

    let new_board = board.step();

    assert_eq!(
        new_board.to_string(),
        "4 8
........
...**...
...**...
........
"
    );
}
