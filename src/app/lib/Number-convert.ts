import { Dictionary } from '../types/dictionary';

export class NumberConvert {
  toWords(number: number): string {
    if(number >= 1000000000) {
        const millions = number % 1000000000;
        if(millions === 0) {
            return this.convertBillions(number);
        }

        return `${this.toWords(millions)} ${Dictionary.GLUE_SY} ${this.convertBillions(number - millions)}`;
    }

    if(number >= 1000000) {
        const hundredThousand = number % 1000000;
        if(hundredThousand === 0) {
            return this.convertMillions(number);
        }

        return `${this.toWords(hundredThousand)} ${Dictionary.GLUE_SY} ${this.convertMillions(number - hundredThousand)}`;
    }

    if(number >= 100000) {
        const tenThousand = number % 100000;
        if(tenThousand === 0) {
            return this.convertHundredThousands(number);
        }

        return `${this.toWords(tenThousand)} ${Dictionary.GLUE_SY} ${this.convertHundredThousands(number - tenThousand)}`;
    }

    if(number >= 10000) {
        const thousand = number % 10000;
        if(thousand === 0) {
            return this.convertTenThousands(number);
        }

        return `${this.toWords(thousand)} ${Dictionary.GLUE_SY} ${this.convertTenThousands(number - thousand)}`;
    }

    if(number >= 1000) {
        const hundred = number % 1000;
        if(hundred === 0) {
            return this.convertThousands(number);
        }

        return hundred === 1 
            ? `${Dictionary.ONE} ${Dictionary.GLUE_SY} ${this.convertThousands(number - hundred)}` 
            : `${this.toWords(hundred)} ${Dictionary.GLUE_SY} ${this.convertThousands(number - hundred)}`;
    }

    if(number >= 100) {
        const tens = number % 100;
        if(tens === 0) {
            return this.convertHundreds(number);
        }

        if(tens === 1) {
            return `${Dictionary.CUSTOM_ONE} ${Dictionary.GLUE_AMBY} ${this.convertHundreds(number - tens)}`;
        }

        if(number < 200 || tens < 10) {
            return `${this.toWords(tens)} ${Dictionary.GLUE_AMBY} ${this.convertHundreds(number - tens)}`;
        }

        return `${this.toWords(tens)} ${Dictionary.GLUE_SY} ${this.convertHundreds(number - tens)}`;
    }

    if(number >= 10) {
        const digit = number % 10;
        if(digit === 0) {
            return this.convertTen(number);
        }

        return digit === 1 
            ? `${Dictionary.CUSTOM_ONE} ${Dictionary.GLUE_AMBY} ${this.convertTen(number - digit)}`
            : `${this.convertDigit(digit)} ${Dictionary.GLUE_AMBY} ${this.convertTen(number - digit)}`;
    }

    if(number >= 0) {
        return this.convertDigit(number);
    }

    return '';
  }

  convertDigit(number: number): string {
    switch (number) {
      case 0:
        return Dictionary.ZERO;
      case 1:
        return Dictionary.ONE;
      case 2:
        return Dictionary.TWO;
      case 3:
        return Dictionary.THREE;
      case 4:
        return Dictionary.FOUR;
      case 5:
        return Dictionary.FIVE;
      case 6:
        return Dictionary.SIX;
      case 7:
        return Dictionary.SEVEN;
      case 8:
        return Dictionary.EIGHT;
      case 9:
        return Dictionary.NINE;
      default:
        return '';
    }
  }

  convertTen(number: number): string {
    switch (number) {
      case 10:
        return Dictionary.TEN;
      case 20:
        return Dictionary.TWENTY;
      case 30:
        return Dictionary.THIRTY;
      case 40:
        return Dictionary.FORTY;
      case 50:
        return Dictionary.FIFTY;
      case 60:
        return Dictionary.SIXTY;
      case 70:
        return Dictionary.SEVENTY;
      case 80:
        return Dictionary.EIGHTY;
      case 90:
        return Dictionary.NINETY;
      default:
        return '';
    }
  }

  convertHundreds(number: number): string {
    switch (number) {
      case 100:
        return Dictionary.HUNDRED;
      case 200:
        return Dictionary.TWO_HUNDRED;
      case 300:
        return Dictionary.THREE_HUNDRED;
      case 400:
        return Dictionary.FOUR_HUNDRED;
      case 500:
        return Dictionary.FIVE_HUNDRED;
      case 600:
        return Dictionary.SIX_HUNDRED;
      case 700:
        return Dictionary.SEVEN_HUNDRED;
      case 800:
        return Dictionary.EIGHT_HUNDRED;
      case 900:
        return Dictionary.NINE_HUNDRED;
      default:
        return '';
    }
  }

  convertThousands(number: number): string {
    switch (number) {
      case 1000:
        return Dictionary.THOUSAND;
      case 2000:
        return Dictionary.TWO_THOUSAND;
      case 3000:
        return Dictionary.THREE_THOUSAND;
      case 4000:
        return Dictionary.FOUR_THOUSAND;
      case 5000:
        return Dictionary.FIVE_THOUSAND;
      case 6000:
        return Dictionary.SIX_THOUSAND;
      case 7000:
        return Dictionary.SEVEN_THOUSAND;
      case 8000:
        return Dictionary.EIGHT_THOUSAND;
      case 9000:
        return Dictionary.NINE_THOUSAND;
      default:
        return '';
    }
  }

  convertTenThousands(number: number): string {
    switch (number) {
      case 10000:
        return Dictionary.TEN_THOUSAND;
      case 20000:
        return Dictionary.TWENTY_THOUSAND;
      case 30000:
        return Dictionary.THIRTY_THOUSAND;
      case 40000:
        return Dictionary.FORTY_THOUSAND;
      case 50000:
        return Dictionary.FIFTY_THOUSAND;
      case 60000:
        return Dictionary.SIXTY_THOUSAND;
      case 70000:
        return Dictionary.SEVENTY_THOUSAND;
      case 80000:
        return Dictionary.EIGHTY_THOUSAND;
      case 90000:
        return Dictionary.NINETY_THOUSAND;
      default:
        return '';
    }
  }

  convertHundredThousands(number: number): string {
    switch (number) {
      case 100000:
        return Dictionary.ONE_HUNDRED_THOUSAND;
      case 200000:
        return Dictionary.TWO_HUNDRED_THOUSAND;
      case 300000:
        return Dictionary.THREE_HUNDRED_THOUSAND;
      case 400000:
        return Dictionary.FOUR_HUNDRED_THOUSAND;
      case 500000:
        return Dictionary.FIVE_HUNDRED_THOUSAND;
      case 600000:
        return Dictionary.SIX_HUNDRED_THOUSAND;
      case 700000:
        return Dictionary.SEVEN_HUNDRED_THOUSAND;
      case 800000:
        return Dictionary.EIGHT_HUNDRED_THOUSAND;
      case 900000:
        return Dictionary.NINE_HUNDRED_THOUSAND;
      default:
        return '';
    }
  }

  convertMillions(number: number): string {
    const beforeMillions = number / 1000000;
    if(beforeMillions >= 1 && beforeMillions <= 9) {
        switch(number) {
            case 1000000:
                return Dictionary.MILLION;
            case 2000000:
                return Dictionary.TWO_MILLION;
            case 3000000:
                return Dictionary.THREE_MILLION;
            case 4000000:
                return Dictionary.FOUR_MILLION;
            case 5000000:
                return Dictionary.FIVE_MILLION;
            case 6000000:
                return Dictionary.SIX_MILLION;
            case 7000000:
                return Dictionary.SEVEN_MILLION;
            case 8000000:
                return Dictionary.EIGHT_MILLION;
            case 9000000:
                return Dictionary.NINE_MILLION;
            default:
                return '';
        }
    }

    if(beforeMillions >= 10 && beforeMillions <= 99) {
        return `${this.toWords(beforeMillions)} tapitrisa`;
    }

    if(beforeMillions >= 100 && beforeMillions <= 999) {
        return `${this.toWords(beforeMillions)} tapitrisa`;
    }

    return "";
  }

  convertBillions(number: number): string {
    const beforeBillions = number / 1000000000;
    if(beforeBillions >= 1 && beforeBillions <= 9) {
        switch (number) {
            case 1000000000:
                return Dictionary.BILLION;
            case 2000000000:
                return Dictionary.TWO_BILLION;
            case 3000000000:
                return Dictionary.THREE_BILLION;
            case 4000000000:
                return Dictionary.FOUR_BILLION;
            case 5000000000:
                return Dictionary.FIVE_BILLION;
            case 6000000000:
                return Dictionary.SIX_BILLION;
            case 7000000000:
                return Dictionary.SEVEN_BILLION;
            case 8000000000:
                return Dictionary.EIGHT_BILLION;
            case 9000000000:
                return Dictionary.NINE_BILLION;
            default:
                return '';
        }
    }

    if(beforeBillions >= 10 && beforeBillions <= 99) {
        return `${this.toWords(beforeBillions)} lavitrisa`;
    }

    if(beforeBillions >= 100 && beforeBillions <= 999) {
        return `${this.toWords(beforeBillions)} lavitrisa`;
    }

    return "";
  }

}
