import Card from "components/BusinessCard";
import logo1 from "assets/img/image 30.png"
import logo2 from "assets/img/image 28.png"
import logo3 from "assets/img/image 29.png"
import logo4 from "assets/img/1b86c5073e307d04709b5ea38199e43a.png"
import { RxPencil1 } from "react-icons/rx";
import Users from "assets/img/User Group.png"

function CustomCompanyStack1() {

    const cardData = [
        {
            title: "Sales Force",
            category: "CRM Tool",
            detail: "#1st in CRM",
            rating: 4.8,
            reviews: "1M+",
            like: false,
            book: false,
            logo: logo1,
        },
        {
            title: "Hub Spot",
            category: "CRM Tool",
            detail: "Stackfolio Choice",
            rating: 4.8,
            reviews: "1M+",
            like: false,
            book: false,
            logo: logo2,
        },
        {
            title: "Zendesk",
            category: "CRM Tool",
            detail: "Stackfolio Choice",
            rating: 4.8,
            reviews: "1M+",
            like: false,
            book: false,
            logo: logo3,
        },
        {
            title: "Freshworks",
            category: "CRM Tool",
            detail: "High Rated",
            rating: 4.8,
            reviews: "1M+",
            like: false,
            book: false,
            logo: logo4,
        },
        // {
        //     title: "Microsoft",
        //     category: "CRM Tool",
        //     detail: "Most Reliable",
        //     rating: 4.8,
        //     reviews: "1M+",
        //     like: false,
        //     book: false,
        //     logo: logo4,
        // },
        // {
        //     title: "Leadsquared",
        //     category: "CRM Tool",
        //     detail: "Loading Newbie",
        //     rating: 4.8,
        //     reviews: "1M+",
        //     like: false,
        //     book: false,
        //     logo: logo4,
        // },
    ];

    return (
        <div className="p-6">
            <div className="flex flex-row mb-6">
                <RxPencil1 size={24} color="[#000000B2]" />
                <div className="text-xl text-[#000000B2] ml-5 mr-8">Boston company venture stack</div>
                <img src={Users} alt="user group" width={74} />
            </div>
            <div className="flex gap-6 overflow-auto touch-pan-x scroll-m-4">
                {cardData.map((card, index) => (
                    <Card
                        key={index} // Use a unique key for each element
                        title={card.title}
                        category={card.category}
                        detail={card.detail}
                        rating={card.rating}
                        reviews={card.reviews}
                        like={card.like}
                        book={card.book}
                        logo={card.logo}
                    />
                ))}
            </div>
            {/* <button className="fixed right-3 bottom-3 sm:right-5 sm:bottom-5 bg-[#E1FF67] rounded-full p-3 spin-on-hover" title="Setting">
                <IconSetting></IconSetting>
            </button> */}
        </div>
    )
}

export default CustomCompanyStack1;