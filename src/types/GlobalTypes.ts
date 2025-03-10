export type ProductsCategoryType = {
  categoryTitle: string;
  subCategories: {
    subCategoryTitle: string;
    linkHref: string;
  }[];
};

export type ProductCartType = {
  cartRate: number;
  cartImg: string;
  cartTitle: string;
  productPrice: number;
};

export type ProductImageType = {
  productImageId: string;
  imageName: string;
  imageFile: string;
};

export type ProductType = {
  productId: string;
  productName: string;
  productBestSelling: boolean;
  productBuildQuality: number;
  productCategory: string;
  productCode: number;
  productColor: string;
  productCount: number;
  productDescription: string;
  productDesign: number;
  productDiscount: number;
  productFeatures: number;
  productPrice: number;
  productPurchaseValue: number;
  productTitle: string;
  productTotalRate: number;

  comments: {
    commentCreationDateAt: string;
    commentId: string;
    commentRate: number;
    productId: string;
    userComment: string;
    userName: string;
  }[];

  faqs: {
    faqId: string;
    productId: string;
    question: string;
    userName: string;
    answers: {
      answerFaq: string;
      answerId: string;
      faq: null;
      faqId: string;
    }[];
  }[];
};
