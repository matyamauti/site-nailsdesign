export type GalleryMedia =
  | { kind: "image"; src: string; width: number; height: number; zoom?: number }
  | { kind: "video"; src: string };

export type GalleryImage = {
  id: string;
  alt: string;
  media: GalleryMedia;
  span: "tall" | "wide" | "square" | "large";
  tone: "lilac" | "rosegold" | "ink" | "mauve" | "purple";
};

export const galleryImages: GalleryImage[] = [
  {
    id: "g-video",
    alt: "Detalhe do alongamento em vídeo — acabamento e brilho",
    media: { kind: "video", src: "/videos/gallery-detail.mp4" },
    span: "tall",
    tone: "purple",
  },
  {
    id: "red-ombre-pearls",
    alt: "Alongamento com ombré vermelho e pérolas 3D",
    media: { kind: "image", src: "/images/gallery/gallery-red-ombre-pearls.png", width: 1084, height: 1451 },
    span: "large",
    tone: "rosegold",
  },
  {
    id: "gold-leopard",
    alt: "Nail art com folha dourada e estampa de leopardo",
    media: { kind: "image", src: "/images/gallery/gallery-gold-leopard.png", width: 1086, height: 1448 },
    span: "square",
    tone: "mauve",
  },
  {
    id: "white-french-gold",
    alt: "Francesinha branca minimalista com glitter dourado",
    media: { kind: "image", src: "/images/gallery/gallery-white-french-gold.png", width: 1086, height: 1448 },
    span: "tall",
    tone: "lilac",
  },
  {
    id: "leopard-french",
    alt: "Francesinha quadrada com estampa de leopardo",
    media: { kind: "image", src: "/images/gallery/gallery-leopard-french.png", width: 1086, height: 1448 },
    span: "wide",
    tone: "ink",
  },
  {
    id: "milky-glazed",
    alt: "Alongamento amendoado efeito leitoso",
    media: { kind: "image", src: "/images/gallery/gallery-milky-glazed.png", width: 1024, height: 1536 },
    span: "square",
    tone: "purple",
  },
  {
    id: "black-stiletto",
    alt: "Alongamento stiletto preto de efeito marcante",
    media: { kind: "image", src: "/images/gallery/gallery-black-stiletto.png", width: 1086, height: 1448 },
    span: "tall",
    tone: "ink",
  },
  {
    id: "nude-gold-star",
    alt: "Nude com estrela dourada 3D",
    media: { kind: "image", src: "/images/gallery/gallery-nude-gold-star.png", width: 1086, height: 1448 },
    span: "square",
    tone: "purple",
  },
  {
    id: "french-blue-flowers",
    alt: "Francesinha com micro flores azuis",
    media: { kind: "image", src: "/images/gallery/gallery-french-blue-flowers.png", width: 1024, height: 1536 },
    span: "wide",
    tone: "lilac",
  },
  {
    id: "classic-french",
    alt: "Francesinha clássica em formato amendoado",
    media: { kind: "image", src: "/images/gallery/gallery-classic-french.png", width: 1122, height: 1402 },
    span: "square",
    tone: "rosegold",
  },
  {
    id: "square-french-marble",
    alt: "Francesinha quadrada com unha em efeito mármore e folha dourada",
    media: { kind: "image", src: "/images/gallery/gallery-square-french-marble.png", width: 1086, height: 1448 },
    span: "tall",
    tone: "mauve",
  },
  {
    id: "yellow-french",
    alt: "Francesinha amarela sobre tecido de seda",
    media: { kind: "image", src: "/images/gallery/gallery-yellow-french.png", width: 1122, height: 1402 },
    span: "square",
    tone: "purple",
  },
  {
    id: "grey-pink-star",
    alt: "Combinação cinza e rosa com estrela dourada",
    media: { kind: "image", src: "/images/gallery/gallery-grey-pink-star.png", width: 1283, height: 1226 },
    span: "wide",
    tone: "lilac",
  },
  {
    id: "spiderweb-art",
    alt: "Nail art temática com teia e aranha",
    media: { kind: "image", src: "/images/gallery/gallery-spiderweb-art.png", width: 1177, height: 1336 },
    span: "large",
    tone: "ink",
  },
  {
    id: "navy-marble-gold",
    alt: "Alongamento quadrado azul-marinho com mármore e folha dourada",
    media: { kind: "image", src: "/images/gallery/gallery-navy-marble-gold.png", width: 1119, height: 1405 },
    span: "square",
    tone: "purple",
  },
  {
    id: "line-art",
    alt: "Nail art com linhas finas prateadas e brancas",
    media: { kind: "image", src: "/images/gallery/gallery-line-art.png", width: 1106, height: 1422 },
    span: "tall",
    tone: "lilac",
  },
  {
    id: "pink-gold-flake",
    alt: "Rosa sólido alternado com folha dourada",
    media: { kind: "image", src: "/images/gallery/gallery-pink-gold-flake.png", width: 1149, height: 1369 },
    span: "square",
    tone: "rosegold",
  },
  {
    id: "black-nude-flower",
    alt: "Nail art editorial em preto e nude com flor",
    media: { kind: "image", src: "/images/gallery/gallery-black-nude-flower.png", width: 1084, height: 1451 },
    span: "wide",
    tone: "ink",
  },
  {
    id: "chrome-glitter",
    alt: "Efeito cromado com glitter sobre base nude",
    media: { kind: "image", src: "/images/gallery/gallery-chrome-glitter.png", width: 1150, height: 1368 },
    span: "square",
    tone: "purple",
  },
  {
    id: "bow-pearl-satin",
    alt: "Francesinha branca com laço e pérola 3D sobre seda",
    media: { kind: "image", src: "/images/gallery/gallery-bow-pearl-satin.png", width: 1254, height: 1254 },
    span: "large",
    tone: "mauve",
  },
  {
    id: "brazil-theme",
    alt: "Nail art temática em verde e amarelo",
    media: { kind: "image", src: "/images/gallery/gallery-brazil-theme.png", width: 1086, height: 1448 },
    span: "tall",
    tone: "purple",
  },
  {
    id: "pink-bow-pearls",
    alt: "Alongamento rosa com laço e pérolas 3D",
    media: { kind: "image", src: "/images/gallery/gallery-pink-bow-pearls.png", width: 1087, height: 1446 },
    span: "square",
    tone: "rosegold",
  },
  {
    id: "white-silver-glitter",
    alt: "Alongamento branco quadrado com glitter prateado",
    media: { kind: "image", src: "/images/gallery/gallery-white-silver-glitter.png", width: 1254, height: 1254 },
    span: "wide",
    tone: "lilac",
  },
  {
    id: "red-floral-french",
    alt: "Francesinha branca e vermelha com flor pintada à mão",
    media: { kind: "image", src: "/images/gallery/gallery-red-floral-french.png", width: 1147, height: 1372 },
    span: "square",
    tone: "purple",
  },
  {
    id: "mixed-art-satin",
    alt: "Nail art mista com estrelas, teia e detalhes em vermelho e preto",
    media: { kind: "image", src: "/images/gallery/gallery-mixed-art-satin.png", width: 1204, height: 1306 },
    span: "tall",
    tone: "ink",
  },
  {
    id: "chrome-stiletto",
    alt: "Alongamento stiletto cromado perolado",
    media: { kind: "image", src: "/images/gallery/gallery-chrome-stiletto.png", width: 1187, height: 1326 },
    span: "square",
    tone: "purple",
  },
];
