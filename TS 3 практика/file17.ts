enum Direction {
    Up = 'Up',
    Down = 'Down',
    Left = 'Left',
    Right = 'Right'
}
//Перечисления гарантируют, что можно использовать только допустимые значения из определенного набора,
//исключая возможность случайных ошибок или орфографических ошибок.Это повышает читаемость и удобство сопровождения кода
type Player = {
    x: number,
    y: number,
    move: (direction: Direction, amount: number) => void,
}

const player: Player = {
    x: 0,
    y: 0,
    move: function (direction: Direction, amount: number) {
        switch (direction) {
            case Direction.Up:
                this.y += amount;
                break;
            case Direction.Down:
                this.y -= amount;
                break;
            case Direction.Left:
                this.x -= amount;
                break;
            case Direction.Right:
                this.x += amount;
                break;
            default:
                break;
        }
    }
}

player.move(Direction.Up, 1);
player.move(Direction.Down, 2);
player.move(Direction.Left, 2);
player.move(Direction.Right, 3);

console.log(player.x === 1); // true
console.log(player.y === -1); // true