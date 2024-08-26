import Card from "components/Card";

function CustomCompanyStack () { 

    const cardData = [
        {
            title: "SalesForce",
            rating: 4.8,
            reviews: "25,652",
            description: `The longest word in any of the major English language dictionaries 
            is pneumon ultramicroscopi csilicovol canoconiosis, 
            a word that refers to a lung disease contracted from
            the inhalation of very fine silica particles, specifically
            from a volcano; medically, it is the same as silicosis.`
        },
        {
            title: "HubSpot",
            rating: 4.5,
            reviews: "15,432",
            description: `HubSpot is a developer and marketer of software products for inbound marketing, sales, and customer service.`
        },
        {
            title: "Zoho",
            rating: 4.6,
            reviews: "12,345",
            description: `Zoho offers a comprehensive suite of online productivity tools and SaaS applications.`
        },
        {
            title: "SalesForce",
            rating: 4.8,
            reviews: "25,652",
            description: `The longest word in any of the major English language dictionaries 
            is pneumon ultramicroscopi csilicovol canoconiosis, 
            a word that refers to a lung disease contracted from
            the inhalation of very fine silica particles, specifically
            from a volcano; medically, it is the same as silicosis.`
        },
        {
            title: "HubSpot",
            rating: 4.5,
            reviews: "15,432",
            description: `HubSpot is a developer and marketer of software products for inbound marketing, sales, and customer service.`
        },
        {
            title: "Zoho",
            rating: 4.6,
            reviews: "12,345",
            description: `Zoho offers a comprehensive suite of online productivity tools and SaaS applications.`
        },
        {
            title: "SalesForce",
            rating: 4.8,
            reviews: "25,652",
            description: `The longest word in any of the major English language dictionaries 
            is pneumon ultramicroscopi csilicovol canoconiosis, 
            a word that refers to a lung disease contracted from
            the inhalation of very fine silica particles, specifically
            from a volcano; medically, it is the same as silicosis.`
        },
        {
            title: "HubSpot",
            rating: 4.5,
            reviews: "15,432",
            description: `HubSpot is a developer and marketer of software products for inbound marketing, sales, and customer service.`
        },
        {
            title: "Zoho",
            rating: 4.6,
            reviews: "12,345",
            description: `Zoho offers a comprehensive suite of online productivity tools and SaaS applications.`
        },
        // Add more card data as needed
    ];

    const text = `The longest word in any of the major English language dictionaries 
    is pneumono ultramicroscopi csilicovol canoconiosis, 
    a word that refers to a lung disease contracted from
     the inhalation of very fine silica particles, specifically
      from a volcano; medically, it is the same as silicosis. `;

    const handleClick = () => {
        
    }

    return (
        <div className="bg-[#e1e1e1] p-12 rounded-tl-[15px] flex flex-wrap gap-10 justify-between overflow-y-auto h-[620px]">
            {cardData.map((card, index) => (
                <Card
                    key={index} // Use a unique key for each element
                    title={card.title}
                    rating={card.rating}
                    reviews={card.reviews}
                    description={card.description}
                    onOpenClick={handleClick}
                />
            ))}
        </div>
    )
}

export default CustomCompanyStack;