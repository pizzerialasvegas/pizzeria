export type MenuItem = {
  id: string
  name: string
  description?: string
  price: number
  image: string
}

export type MenuCategory = {
  id: string
  name: string
  items: MenuItem[]
}

export const menuData: MenuCategory[] = [
  {
    id: "pizzas",
    name: "Pizzas",
    items: [
      {
        id: "pizza-churrasco-chapin",
        name: "Pizza Churrasco Chapín",
        description: "1 dip de cilantro y cebolla",
        price: 100,
        image: "/images/pizza-1.jpg"
      },
      {
        id: "pizza-extrema",
        name: "Pizza Extrema",
        description: "3 estaciones (Deluxe, Hawaiana, 5 Carnes) + 1 estación de 1 ingrediente a tu elección",
        price: 80,
        image: "/images/pizza-2.jpg"
      },
      {
        id: "pizza-grande-1-ingrediente",
        name: "Pizza Grande de 1 Ingrediente (12 porciones)",
        description: "Jamón, Peperoni, Salami, Carne o Salchicha Italiana",
        price: 50,
        image: "/images/pizza-3.jpg"
      },
      {
        id: "pizza-mediana-1-ingrediente",
        name: "Pizza Mediana de 1 Ingrediente",
        description: "Jamón, Peperoni, Salami, Carne o Salchicha Italiana",
        price: 40,
        image: "/images/pizza-4.jpg"
      },
      {
        id: "pizza-4-estaciones",
        name: "Pizza 4 Estaciones",
        description: "3 estaciones de 1 ingrediente + 1 estación Deluxe o Hawaiana",
        price: 65,
        image: "/images/pizza-5.jpg"
      },
      {
        id: "cheese-bread",
        name: "Cheese Bread + Bebida",
        price: 20,
        image: "/images/cheese-bread.jpg"
      },
      {
        id: "pizza-2-estaciones",
        name: "Pizza 2 Estaciones (12 porciones)",
        description: "Jamón, Peperoni, Salami, Carne o Salchicha Italiana",
        price: 55,
        image: "/images/pizza-6.jpg"
      },
      {
        id: "pizza-hawaiana",
        name: "Pizza Hawaiana (12 porciones)",
        price: 70,
        image: "/images/pizza-7.jpg"
      },
      {
        id: "pizza-deluxe",
        name: "Pizza Deluxe (12 porciones)",
        price: 85,
        image: "/images/pizza-8.jpg"
      },
      {
        id: "pizza-especialidades",
        name: "Pizza de Especialidades",
        description: "5 Carnes o Suprema",
        price: 95,
        image: "/images/pizza-9.jpg"
      }
    ]
  },
  {
    id: "calzones",
    name: "Don Calzone's",
    items: [
      {
        id: "calzone-churrasco-chapin",
        name: "Don Calzone Churrasco Chapín",
        description: "1 dip de cilantro y cebolla",
        price: 35,
        image: "/images/calzone-1.jpg"
      },
      {
        id: "calzone-1-ingrediente",
        name: "Don Calzone de 1 Ingrediente + Bebida",
        description: "Jamón, Peperoni, Salami, Carne o Salchicha Italiana",
        price: 20,
        image: "/images/calzone-2.jpg"
      },
      {
        id: "calzone-hawaiano",
        name: "Don Calzone Hawaiano + Bebida",
        price: 25,
        image: "/images/calzone-3.jpg"
      },
      {
        id: "calzone-deluxe",
        name: "Don Calzone Deluxe + Bebida",
        price: 30,
        image: "/images/calzone-4.jpg"
      },
      {
        id: "calzone-5-carnes",
        name: "Don Calzone 5 Carnes + Bebida",
        price: 30,
        image: "/images/calzone-5.jpg"
      },
      {
        id: "calzone-supremo",
        name: "Don Calzone Supremo + Bebida",
        price: 35,
        image: "/images/calzone-6.jpg"
      }
    ]
  },
  {
    id: "personales",
    name: "Personales",
    items: [
      {
        id: "personal-churrasco-chapin",
        name: "Pizza Personal Churrasco Chapín",
        description: "1 dip de cilantro y cebolla",
        price: 35,
        image: "/images/personal-1.jpg"
      },
      {
        id: "personal-1-ingrediente",
        name: "Pizza Personal de 1 Ingrediente + Bebida",
        description: "Jamón, Peperoni, Salami, Carne o Salchicha Italiana",
        price: 20,
        image: "/images/personal-2.jpg"
      },
      {
        id: "personal-hawaiana",
        name: "Pizza Personal Hawaiana + Bebida",
        price: 25,
        image: "/images/personal-3.jpg"
      },
      {
        id: "personal-deluxe",
        name: "Pizza Personal Deluxe + Bebida",
        price: 30,
        image: "/images/personal-4.jpg"
      },
      {
        id: "personal-5-carnes",
        name: "Pizza Personal 5 Carnes + Bebida",
        price: 30,
        image: "/images/personal-5.jpg"
      },
      {
        id: "personal-suprema",
        name: "Pizza Personal Suprema + Bebida",
        price: 35,
        image: "/images/personal-6.jpg"
      }
    ]
  },
  {
    id: "pastas",
    name: "Pastas",
    items: [
      {
        id: "lasana-1-libra",
        name: "Lasaña de 1 Libra",
        description: "Incluye pan y bebida",
        price: 35,
        image: "/images/lasana-1.jpg"
      },
      {
        id: "lasana-1-5-libras",
        name: "Lasaña de 1.5 Libras",
        description: "Incluye pan y bebida",
        price: 50,
        image: "/images/lasana-2.jpg"
      },
      {
        id: "lasana-familiar",
        name: "Lasaña Familiar",
        description: "Incluye pan y bebida",
        price: 135,
        image: "/images/lasana-3.jpg"
      },
      {
        id: "alitas-5",
        name: "5 Alitas en Barbacoa + Bebida",
        description: "Incluye 1 aderezo (ranch, mostaza miel o césar)",
        price: 35,
        image: "/images/alitas-1.jpg"
      },
      {
        id: "alitas-10",
        name: "10 Alitas en Barbacoa",
        description: "Incluye 1 aderezo (ranch, mostaza miel o césar)",
        price: 50,
        image: "/images/alitas-2.jpg"
      }
    ]
  },
  {
    id: "hamburguesas",
    name: "Hamburguesas",
    items: [
      {
        id: "hamburguesa-res",
        name: "Combo - Hamburguesa de Res 1/4 de Libra",
        price: 40,
        image: "/images/burger-1.jpg"
      },
      {
        id: "hamburguesa-pollo",
        name: "Combo - Hamburguesa de Pollo",
        price: 25,
        image: "/images/burger-2.jpg"
      }
    ]
  }
]

export const contactInfo = {
  address: '12 CALLE "C" 6-51 ZONA 3',
  reference: 'EN LA ANTIGUA PARADA DE LAS CAMIONETAS',
  hours: 'Lunes a Domingo de 12:00 a 21:00 horas',
  phones: [
    { number: '+50248354756', display: '(+502) 4835-4756' },
    { number: '+50248354670', display: '(+502) 4835-4670' }
  ],
  deliveryNote: '¡Servicio a domicilio GRATIS en zona 3, en áreas cercanas a la Pizzería! (consumo mínimo Q45)'
}
