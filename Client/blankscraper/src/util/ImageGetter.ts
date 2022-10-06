export class ImageGetter {
  static getImage(titleIn: string): string | undefined {
    const title = titleIn.toLowerCase();
    if (title.includes("11")) {
      if (title.includes("black")) {
        return require("../Resources/iphoneImages/i11/Black11Alpha.png");
      }
      if (title.includes("green")) {
        return require("../Resources/iphoneImages/i11/Green11Alpha.png");
      }
      if (title.includes("purple")) {
        return require("../Resources/iphoneImages/i11/Purple11Alpha.png");
      }
      if (title.includes("red")) {
        return require("../Resources/iphoneImages/i11/Red11Alpha.png");
      }
      if (title.includes("white")) {
        return require("../Resources/iphoneImages/i11/White11Alpha.png");
      }
      if (title.includes("yellow")) {
        return require("../Resources/iphoneImages/i11/YellowIphone11Alpha.png");
      }
    }
    if (title.includes("12")) {
      if (title.includes("black")) {
        return require("../Resources/iphoneImages/i12/BlackIphone12Alpha.png");
      }
      if (title.includes("green")) {
        return require("../Resources/iphoneImages/i12/GreenIphone12Alpha.png");
      }
      if (title.includes("purple")) {
        return require("../Resources/iphoneImages/i12/Purple12Alpha.png");
      }
      if (title.includes("midnight")) {
        return require("../Resources/iphoneImages/i12/MidnightIphone12.png");
      }
      if (title.includes("red")) {
        return require("../Resources/iphoneImages/i12/RedIphone12Alpha.png");
      }
      if (title.includes("white")) {
        return require("../Resources/iphoneImages/i12/WhiteIphone12Alpha.png");
      }
    }

    if (title.includes("13")) {
      if (title.includes("coral blue")) {
        return require("../Resources/iphoneImages/i13/CoralBlueIphone13Alpha.png");
      }
      if (title.includes("blue")) {
        return require("../Resources/iphoneImages/i13/Blue13ProAlpha.png");
      }
      if (title.includes("pink")) {
        return require("../Resources/iphoneImages/i13/PinkIphone13Overlay.png");
      }
      if (title.includes("midnight")) {
        return require("../Resources/iphoneImages/i13/MidnightIphone13Alpha.png");
      }
      if (title.includes("red")) {
        return require("../Resources/iphoneImages/i13/RedIphone13Alpha.png");
      }
      if (title.includes("white")) {
        return require("../Resources/iphoneImages/i13/WhiteIphone13Alpha.png");
      }
    }

    if (title.includes("SE")) {
      if (title.includes("black")) {
        return require("../Resources/iphoneImages/SE/BlackSEAlpha.png");
      }
      if (title.includes("red")) {
        return require("../Resources/iphoneImages/SE/RedSEAlpha.png");
      }
      if (title.includes("white")) {
        return require("../Resources/iphoneImages/SE/WhiteSEAlpha.png");
      }
    }

    return require("../Resources/iphoneImages/i12/BlackIphone12Alpha.png");
  }
}
