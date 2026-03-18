import { Link, } from "react-router";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  
  BreadcrumbSeparator,
} from "../ui/breadcrumb";
import { SlashIcon } from "lucide-react";

interface Breadcrumb {
  label: string;
  to: string;
}
interface Props {
  currentPage: string;
  breadcumbs?: Breadcrumb[];
}

export const CustomBreadcrumbs = ({ currentPage, breadcumbs = [] }: Props) => {
  return (
    <Breadcrumb className="my-5">
      <BreadcrumbList>
        <BreadcrumbItem>
          <BreadcrumbLink asChild>
            <Link to="/">Home</Link>
          </BreadcrumbLink>
        </BreadcrumbItem>

        {/* Start separator */}
        {/* <BreadcrumbSeparator>
          <SlashIcon />
        </BreadcrumbSeparator> */}
        {/* End separator */}

        {breadcumbs.map((crumb) => (
          <div className="flex items-center">
            <BreadcrumbItem>

            <BreadcrumbSeparator>
              <SlashIcon />
            </BreadcrumbSeparator>
              <BreadcrumbLink asChild>
                <Link to={crumb.to}>{crumb.label}</Link>
              </BreadcrumbLink>
            </BreadcrumbItem>
          </div>
        ))}

            {/* Start separator */}
        <BreadcrumbSeparator>
          <SlashIcon />
        </BreadcrumbSeparator>
        {/* End separator */}

        <BreadcrumbItem>
          <BreadcrumbLink>{currentPage}</BreadcrumbLink>
        </BreadcrumbItem>
      </BreadcrumbList>
    </Breadcrumb>
  );
};
