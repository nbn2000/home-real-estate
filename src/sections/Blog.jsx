import blogImg from "/blog.jpg";

const Blog = () => {
  return (
    <section
      id="blog"
      className="container-x-axis container-y-axis relative -mb-[300px] z-50"
    >
      <div className=" flex flex-col md:flex-row">
        <div className="relative md:w-1/2">
          <img
            src={blogImg}
            alt="blog img"
            className="w-full min-h-[383px] md:h-full object-cover object-center rounded-t-[10px] md:rounded-t-none md:!rounded-l-[10px]"
          />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 grid grid-cols-2 bg-[rgba(255,239,144,0.67)] w-[80%] p-4">
            <div className="flex flex-col justify-start items-start">
              <span className="typography-xl2-inter text-[rgba(64,20,8,1)] lg:text-[50px] lg:leading-[60px]">
                9
              </span>
              <span className="typography-sm-300-inter text-[rgba(123,123,123,1)] lg:text-[18px] lg:leading-[27px] ">
                Years experience in real estate
              </span>
            </div>
            <div className="flex flex-col justify-start items-start ">
              <span className="typography-xl2-inter text-[rgba(64,20,8,1)] lg:text-[50px] lg:leading-[60px]">
                $23K
              </span>
              <span className="typography-sm-300-inter text-[rgba(123,123,123,1)] lg:text-[18px] lg:leading-[27px]">
                Total Net Profit Every Month
              </span>
            </div>
            <div className="flex flex-col justify-start items-start">
              <span className="typography-xl2-inter text-[rgba(64,20,8,1)] lg:text-[50px] lg:leading-[60px]">
                17
              </span>
              <span className="typography-sm-300-inter text-[rgba(123,123,123,1)] lg:text-[18px] lg:leading-[27px]">
                Every month a new happy customer
              </span>
            </div>
            <div className="flex flex-col justify-start items-start ">
              <span className="typography-xl2-inter text-[rgba(64,20,8,1)] lg:text-[50px] lg:leading-[60px]">
                $4K-7K
              </span>
              <span className="typography-sm-300-inter text-[rgba(123,123,123,1)] lg:text-[18px] lg:leading-[27px]">
                Approximate Profit In 20 Business Days
              </span>
            </div>
          </div>
        </div>
        <div className="flex flex-col justify-start items-start bg-[rgb(255,239,144)] z-50 rounded-b-[10px] md:rounded-b-none md:rounded-r-[10px] p-[30px] gap-[52px] md:w-1/2">
          <span className="typography-xxl text-[rgba(64,63,70,1)] lg:text-[54px] lg:leading-[49px]">
            Subscribe to Our Newsletter
          </span>
          <p className="typography-sm-300  text-[rgba(64,63,70,1)] lg:text-[20px] lg:leading-[26px]">
            The property that suits you, Choose an apartment that suits your
            requirements and financial capabilities, Attractive location close
            to business centers provides guaranteed rental, Choose an apartment
            that suits your requirements and financial capabilities, Attractive
            location close to business centers provides guaranteed rental. The
            property that suits you, Choose an apartment that suits your
            requirements and financial.
          </p>
          <button className="bg-primary w-full h-[79px] rounded-[5px] p-[20px] text-white typography-xl1-bold lg:w-[192px]">
            Apply Now
          </button>
        </div>
      </div>
    </section>
  );
};

export default Blog;
