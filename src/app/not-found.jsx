import PageHeading from "@/components/shared/page-heading";
import {Button} from "@/components/ui/button";
import Link from "next/link";

function NotFoundPage() {
    return (
        <div className="flex flex-col justify-center items-center">
            <PageHeading title="Error 404" subtitle="> Page not found"/>
            <Link href="/">
                <Button variant="glowing">Back to Homepage</Button>
            </Link>
        </div>
    )
}

export default NotFoundPage;
