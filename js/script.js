let title = 'la maison jungle';
let description = 'Ici achetez toutes les plantes dont vous avez toujours rêvé 🌵🌱🎍';
let cart = 'panier';
let flowers = [
    {
        name: 'monstera',
        price: 8
    },
    {
        name: 'lierre',
        price: 10
    },
    {
        name: 'bouquet',
        price: 15
    }
]


function Header() {
    return (
        <h1>{title.toUpperCase()}</h1>
    )
}

function Description() {
    return (
        <p>{description}</p>
    )
}

function Banner() {
    return (
    <div>
        <Header />
        <Description />
    </div>
    )
}

function Cart () {
    return (
        <h2>{cart.toUpperCase()}</h2>
    )
}

function Flowers () {
    return (
        <div>
            <ul>
                <li>{flowers[0].name} : {flowers[0].price.toPrecision(3).replace(".", ",")} €</li>
                <li>{flowers[1].name} : {flowers[1].price.toPrecision(4).replace(".", ",")} €</li>
                <li>{flowers[2].name} : {flowers[2].price.toPrecision(4).replace(".", ",")} €</li>
            </ul>
            <p>Total : {(flowers[0].price + flowers[1].price + flowers[2].price).toPrecision(4).replace(".", ",")} €</p>
        </div>
    )
}

ReactDOM.render(
    <div>
        <Banner />
        <Cart />
        <Flowers />
    </div>, 
    document.getElementById("root")
)