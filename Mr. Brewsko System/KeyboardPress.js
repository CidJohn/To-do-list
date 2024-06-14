document.addEventListener('keydown', function (e) {
        switch (e.key) {
            case '1':
                NumberControl('1');
                break;
            case '2':
                NumberControl('2');
                break;
            case '3':
                NumberControl('3');
                break;
            case '4':
                NumberControl('4');
                break;
            case '5':
                NumberControl('5');
                break;
            case '6':
                NumberControl('6');
                break;
            case '7':
                NumberControl('7');
                break;
            case '8':
                NumberControl('8');
                break;
            case '9':
                NumberControl('9');
                break;
            case 'Backspace':
                ClearLastNumber();
                break;
            case 'q':
                OrderControl("Milktea");
                break;
            case 'Q':
                OrderControl("Milktea");
                break;
            case 'w':
                OrderControl("CheeseCake");
                break;
            case 'W':
                OrderControl("CheeseCake");
                break;
            case 'e':
                OrderControl("ColdBrew");
                break;
            case 'E':
                OrderControl("ColdBrew"); 
                break
            case 'a':
                OrderControl("HotBrew");
                break;
            case 'A':
                OrderControl("HotBrew");
                break;
            case 's':
                OrderControl("CoffeeFrappe");
                break;
            case 'S':
                OrderControl("CoffeeFrappe");
                break;
            case 'd':
                OrderControl("NonCoffeeFrappe");
                break;
            case 'D':
                OrderControl("NonCoffeeFrappe");
                break
            case 'z':
                OrderControl("PremiumFrappe");
                break;
            case 'Z':
                OrderControl("PremiumFrappe");
                break;
            case 'x':
                OrderControl("FruitTeaWater");
                break;
            case 'X':
                OrderControl("FruitTeaWater");
                break;
            case 'c':
                OrderControl("FruitTeaTea");
                break;
            case 'C':
                OrderControl("FruitTeaTea");
                break;
            case 'r':
                OrderControl("YakultSeries");
                break;
            case 'R':
                OrderControl("YakultSeries");
                break;
            case 'f':
                OrderControl("FizzySoda");
                break;
            case 'F':
                OrderControl("FizzySoda");
                break;
            case 'm':
                SizeControl("Medium");
                break;
            case 'M':
                SizeControl("Medium");
                break;
            case 'l':
                SizeControl("Large");
                break;
            case "L":
                SizeControl("Large");
                break;
            

        }
    });