fn main() {
    let x = 5;
    let y = 10;
    println!("The sum of x and y is: {}", x + y);
    fn add(a: i32, b: i32) -> i32 {
        a + b
    }
    println!("Result of add function: {}", add(x, y));
}
