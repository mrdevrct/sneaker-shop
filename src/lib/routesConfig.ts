export type RouteConfig = {
  id: string;
  label: string;
  path: string;
  isShowBottomNav: boolean;
  isShowHeader: boolean;
  isShowBottomAction: boolean
};

export const routesConfig: RouteConfig[] = [
  {
    id: "home",
    label: "خانه",
    path: "/",
    isShowBottomNav: true,
    isShowHeader: true,
    isShowBottomAction: false,
  },
  {
    id: "products",
    label: "محصولات",
    path: "/products",
    isShowBottomNav: true,
    isShowHeader: true,
    isShowBottomAction: false,
  },
  {
    id: "contact",
    label: "درباره ما",
    path: "/contact",
    isShowBottomNav: true,
    isShowHeader: true,
    isShowBottomAction: false,
  },
  {
    id: "terms",
    label: "قوانین و مقررات",
    path: "/terms",
    isShowBottomNav: true,
    isShowHeader: true,
    isShowBottomAction: false,
  },
  {
    id: "product",
    label: "محصول",
    path: "/products/:id",
    isShowBottomNav: false,       
    isShowHeader: true,
    isShowBottomAction: true, 
  },
];
