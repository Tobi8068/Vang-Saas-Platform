import Card from "components/Card";

function CustomCompanyStack () { 

    const handleClick = () => {
        
    }

    return (
        <div className="mt-20">
            <Card title="SalesForce" rating={1} reviews="4.8" description="T" onOpenClick={handleClick}></Card> 
        </div>
    )
}

export default CustomCompanyStack;