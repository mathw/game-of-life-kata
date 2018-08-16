use super::board::Board;

fn cell_outcome(live_state: bool, live_neighbours: usize) -> bool {
    if live_neighbours < 2 {
        false
    } else if live_neighbours > 3 {
        false
    } else if live_state && (live_neighbours == 2 || live_neighbours == 3) {
        true
    } else if !live_state && live_neighbours == 3 {
        true
    } else {
        live_state
    }
}

pub fn iterate_board(board: &Board) -> Board {
    let mut new_board = board.clone();

    for x in 0..board.width() {
        for y in 0..board.height() {
            match board.count_live_around(x, y) {
                Some(count) => {
                    let current = board.get_cell(x, y).unwrap();
                    new_board.set_cell(x, y, cell_outcome(current, count));
                }
                None => (),
            }
        }
    }

    new_board
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

    let new_board = iterate_board(&board);

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
