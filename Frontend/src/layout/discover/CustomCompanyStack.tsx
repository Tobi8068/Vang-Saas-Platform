import Card from "components/Card";
import { IconSetting } from "components/Icons";

function CustomCompanyStack() {

    const cardData = [
        {
            title: "SalesForce",
            rating: 4.8,
            reviews: 25652,
            description: `Salesforce brings together all your data, from any source. 
            Einstein 1, our complete suite of products, unites your sales, service, marketing, 
            commerce, and IT teams with a single, shared view of customer information. With artificial 
            intelligence integrated across all products, Salesforce helps everyone in your company work 
            more productively and better deliver the personalized experiences customers love.`
        },
        {
            title: "HubSpot",
            rating: 4.5,
            reviews: 15432,
            description: `HubSpot is a developer and marketer of software products for inbound marketing, sales, and customer service.`
        },
        {
            title: "Zoho",
            rating: 4.6,
            reviews: 12345,
            description: `Zoho offers a comprehensive suite of online productivity tools and SaaS applications.`
        },
        {
            title: "SalesForce",
            rating: 4.8,
            reviews: 25652,
            description: `Salesforce brings together all your data, from any source. 
            Einstein 1, our complete suite of products, unites your sales, service, marketing, 
            commerce, and IT teams with a single, shared view of customer information. With artificial 
            intelligence integrated across all products, Salesforce helps everyone in your company work 
            more productively and better deliver the personalized experiences customers love.`
        },
        {
            title: "HubSpot",
            rating: 4.5,
            reviews: 15432,
            description: `HubSpot is a developer and marketer of software products for inbound marketing, sales, and customer service.`
        },
        {
            title: "Zoho",
            rating: 4.6,
            reviews: 12345,
            description: `Zoho offers a comprehensive suite of online productivity tools and SaaS applications.`
        },
        {
            title: "SalesForce",
            rating: 4.8,
            reviews: 25652,
            description: `Salesforce brings together all your data, from any source. 
            Einstein 1, our complete suite of products, unites your sales, service, marketing, 
            commerce, and IT teams with a single, shared view of customer information. With artificial 
            intelligence integrated across all products, Salesforce helps everyone in your company work 
            more productively and better deliver the personalized experiences customers love.`
        },
        {
            title: "HubSpot",
            rating: 4.7,
            reviews: 15432,
            description: `HubSpot is a developer and marketer of software products for inbound marketing, sales, and customer service.`
        },
        {
            title: "Zoho",
            rating: 4.6,
            reviews: 12345,
            description: `Zoho offers a comprehensive suite of online productivity tools and SaaS applications.`
        },
        // Add more card data as needed
    ];

    return (
        <div className="bg-[#e1e1e1] p-4 md:p-12 rounded-tl-[15px] flex flex-wrap gap-10 justify-around overflow-y-auto h-[685px]">
            {cardData.map((card, index) => (
                <Card
                    key={index} // Use a unique key for each element
                    title={card.title}
                    rating={card.rating}
                    reviews={card.reviews}
                    description={card.description}
                />
            ))}
            <button className="fixed right-3 bottom-3 sm:right-5 sm:bottom-5 bg-[#E1FF67] rounded-full p-3 spin-on-hover" title="Setting">
                <IconSetting></IconSetting>
            </button>
        </div>
    )
}

export default CustomCompanyStack;