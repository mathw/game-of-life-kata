mod board;
mod game;

use game::Steppable;
use std::fs::File;
use std::io::Read;
use std::str::FromStr;

fn main() {
    let args = std::env::args().collect::<Vec<_>>();

    if args.len() != 2 {
        eprintln!("Provide an input file!");
        return;
    }

    let filename = args[1].clone();
    let mut f = File::open(filename).expect("Input file not readable");

    let mut contents = String::new();
    f.read_to_string(&mut contents)
        .expect("Unable to read input file");

    let board = board::Board::from_str(&contents).expect("Unable to parse input board");
    let new_board = board.step();

    println!("{}", new_board.to_string());
}
