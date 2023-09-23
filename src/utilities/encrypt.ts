import CryptoJs from "crypto-js";

const secretKey = "secret key 112200";
export class AES {
  static encrypt(text: string) {
    return CryptoJs.AES.encrypt("" + text, secretKey).toString();
  }

  static decrypt(hashText: string) {
    return CryptoJs.AES.decrypt(hashText, secretKey).toString(
      CryptoJs.enc.Utf8
    );
  }
}

export class MD5 {
  static encrypt(text: string) {
    return CryptoJs.MD5("" + text).toString();
  }
}

export class Base64URL {
  static encrypt(text: string) {
    return CryptoJs.enc.Base64url.stringify(CryptoJs.enc.Utf8.parse(text));
  }

  static decrypt(hashText: string) {
    return CryptoJs.enc.Base64url.parse(hashText).toString(CryptoJs.enc.Utf8);
  }
}
