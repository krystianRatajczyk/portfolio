const styles = {
  boxWidth: "xl:max-w-[1280px] w-full",

  heading2:
    "font-poppins font-semibold xs:text-[48px] text-[40px] text-white xs:leading-[76.8px] leading-[66.8px] w-full",
  paragraph:
    "font-poppins font-normal text-dimWhite text-[18px] leading-[30.8px]",

  flexCenter: "flex justify-center items-center",
  flexStart: "flex justify-center items-start",

  paddingX: "sm:px-[30px] xs:px-12 px-6",
  paddingXSection: "ss:px-[40px] px-[20px]",
  paddingY: "sm:py-16 py-6",
  padding: "sm:px-16 px-6 sm:py-12 py-4",

  marginX: "sm:mx-16 mx-6",
  marginY: "sm:my-16 my-6",
};

export const layout = {
  section: `flex md:flex-row flex-col ${styles.paddingY}`,
  sectionReverse: `flex md:flex-row flex-col-reverse ${styles.paddingY}`,

  sectionImgReverse: `flex-1 flex ${styles.flexCenter} md:mr-10 mr-0 md:mt-0 mt-10 relative`,
  sectionImg: `flex-1 flex ${styles.flexCenter} md:ml-10 ml-0 md:mt-0 mt-10 relative`,

  sectionInfo: `flex-1 ${styles.flexStart} flex-col`,
  buttonPadding: `md:px-[60px] ss:px-[75px] xs:px-[45px] py-[10px]`,
  buttonText: `md:text-[30px] text-[30px]`,
};

export const elements = {
  sendButton: `self-start ${layout.buttonPadding} ${layout.buttonText} bg-white text-black outline-none
  border-none text-bold rounded-[20px] hover:bg-[#cfd2d4] transition duration-300 hover:text-white`,
  input: `pl-[20px] flex-1 h-[80px] bg-transparent outline-none border border-1 border-white rounded-[20px]
  text-white focus:outline-none focus:border-pink`,
};
export default styles;
