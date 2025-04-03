var car = {
    manufacturer: {
        toyota: [
            {
                vitz: {
                    color: 'Blue',
                    bodyType: 'Hatchback'
                },
                corolla: {
                    color: 'Silver',
                    bodyType: 'Sedan'
                }
            }
        ],
        Honda: [
            {
                civic: {
                    color: 'White',
                    bodyType: 'Hatchback'
                },
                city: {
                    color: 'Black',
                    bodyType: 'Sedan'
                }
            }
        ],
        Maruthi: [
            {
                Brezza: {
                    color: 'White',
                    bodyType: 'SUV'
                },
                Ciaz: {
                    color: 'Black',
                    bodyType: 'Sedan'
                }
            }
        ]
    }
};
function carType(car) {
    const { manufacturer } = car;
    const { toyota, ...manufacturerRest } = manufacturer;
    const { Honda, Maruthi } = manufacturerRest;
    const [indexHonda] = Honda;
    const { civic, ...cityRest } = indexHonda;
    const [indexMaruthi] = Maruthi;
    const { Brezza, ...ciazRest } = indexMaruthi;
    const {city} = cityRest
    const {color : cityColor, bodyType : cityBodyType} = city
    const {Ciaz} = ciazRest
    const {color : ciazColor, bodyType : ciazBodyType} = Ciaz
    console.log(`Color of City : "${cityColor}" | Body type of City : "${cityBodyType}"`);
    console.log(`Color of Ciaz : "${ciazColor}" | Body type of Ciaz : "${ciazBodyType}"`);
}
carType(car)