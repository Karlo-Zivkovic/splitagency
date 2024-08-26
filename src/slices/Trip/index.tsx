import { Content } from "@prismicio/client";
import { FaClock } from "react-icons/fa6";
import { IoPeople } from "react-icons/io5";
import { TbActivity } from "react-icons/tb";
import {
  JSXMapSerializer,
  PrismicRichText,
  SliceComponentProps,
} from "@prismicio/react";
import { PrismicNextImage } from "@prismicio/next";

/**
 * Props for `Trip`.
 */
export type TripProps = SliceComponentProps<Content.TripSlice>;

const components: JSXMapSerializer = {
  heading1: ({ children }) => (
    <h1 className="text-gray-900 text-3xl title-font font-medium mb-4">
      {children}
    </h1>
  ),
};

/**
 * Component for "Trip" Slices.
 */
const Trip = ({ slice }: TripProps): JSX.Element => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <section className="text-gray-600 body-font overflow-hidden">
        <div className="container px-5 py-24 mx-auto">
          <div className="lg:w-4/5 mx-auto flex flex-wrap">
            <div className="lg:w-1/2 w-full lg:pr-10 lg:py-6 mb-6 lg:mb-0">
              <PrismicRichText
                field={slice.primary.title}
                components={components}
              />
              <p className="leading-relaxed mb-4">
                {slice.primary.description}
              </p>
              <div className="flex border-t border-gray-200 py-2">
                <div className="flex items-center gap-2">
                  <FaClock className="h-6 w-6" />
                  <span className="text-gray-500">Duration</span>
                </div>
                <span className="ml-auto text-gray-900">
                  {slice.primary.duration}
                </span>
              </div>
              <div className="flex border-t border-gray-200 py-2">
                <div className="flex items-center gap-2">
                  <IoPeople className="h-6 w-6" />
                  <span className="text-gray-500">Group Size</span>
                </div>
                <span className="ml-auto text-gray-900">
                  {slice.primary.numberofpeople}
                </span>
              </div>
              <div className="flex border-t border-b mb-6 border-gray-200 py-2">
                <div className="flex items-center gap-2">
                  <TbActivity className="h-6 w-6" />
                  <span className="text-gray-500">Activity</span>
                </div>
                <span className="ml-auto text-gray-900">
                  {slice.primary.activity}
                </span>
              </div>
              <div className="flex items-center">
                <div className="flex gap-2 items-center">
                  <span className="title-font font-medium text-2xl text-gray-900">
                    {slice.primary.price}
                  </span>
                  <span className="text-lg">Per Person</span>
                </div>
                <button className="flex ml-auto text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded">
                  Check Availability
                </button>
              </div>
            </div>
            <PrismicNextImage
              field={slice.primary.image}
              className="lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center rounded"
            />
          </div>
        </div>
      </section>
    </section>
  );
};

export default Trip;
