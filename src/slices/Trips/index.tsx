import { Content } from "@prismicio/client";
import { PrismicNextImage, PrismicNextLink } from "@prismicio/next";
import {
  JSXMapSerializer,
  PrismicRichText,
  SliceComponentProps,
} from "@prismicio/react";

/**
 * Props for `Trips`.
 */
export type TripsProps = SliceComponentProps<Content.TripsSlice>;

const components: JSXMapSerializer = {
  heading3: ({ children }) => (
    <h2 className="text-gray-900 title-font text-lg font-medium">{children}</h2>
  ),
};
/**
 * Component for "Trips" Slices.
 */
const Trips = ({ slice }: TripsProps): JSX.Element => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-wrap -m-4">
            {slice.primary.trip.map((item, index) => (
              <div
                key={index}
                className="lg:w-1/4 md:w-1/2 p-4 w-full hover:scale-105 transition-all duration-150"
              >
                <PrismicNextLink field={item.link}>
                  <p className="block relative h-48 rounded overflow-hidden">
                    <PrismicNextImage
                      field={item.image}
                      className="object-cover object-center w-full h-full block"
                    />
                  </p>
                  <div className="mt-4">
                    <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">
                      {item.category}
                    </h3>
                    <PrismicRichText
                      field={item.title}
                      components={components}
                    />
                    <p className="mt-1">{item.price}</p>
                  </div>
                </PrismicNextLink>
              </div>
            ))}
          </div>
        </div>
      </section>
    </section>
  );
};

export default Trips;
