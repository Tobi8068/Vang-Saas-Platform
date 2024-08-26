import DiscoverBio from "./DiscoverBio";
import CustomCompanyStack from "./CustomCompanyStack";

function DiscoverPage() {
    return (
        <div className="flex flex-col gap-12 w-full mb-0">
            <DiscoverBio></DiscoverBio>
            <CustomCompanyStack></CustomCompanyStack>
        </div>
    )
}

export default DiscoverPage;