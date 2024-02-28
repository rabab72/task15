        // CHAPTER 4________________________________________________________________________

        // question#1 ------------------------
        // var x = 1,
        //     y = 2,
        //     z = 3;

        // question#2-------------------------
        // Legal

        // my
        // _mystar
        // $mystar
        // my_star
        // mystar123

        // illegal variable

        // 123 mystar(Cannot start with a digit)
        // my - star(Cannot contain a hyphen)
        // my star(Cannot contain a space)
        // var (Cannot use reserved words)
        // my.star(Cannot contain a dot)

        // question#3--------------------------
        document.write("<h1>question#3 CHAPTER - 4</h1>");
        //heading
        document.write("<h1>Rules for naming JS variables</h1>");

        //rules
        document.write("<p>Variable names can only contain letters, numbers, underscores, and dollar signs. For example $my_1stVariable</p>");
        document.write("<p>Variables must begin with a letter, underscore, or dollar sign. For example $name, _name, or name</p>");
        document.write("<p>Variable names are case-sensitive</p>");
        document.write("<p>Variable names should not be JS keywords</p>");

        // CHAPTER #5_________________________________________________________________________

        // question#1 ------------------------
        document.write("<h1>question#1 CHAPTER - 5</h1>");

        var num1 = 3;
        var num2 = 5;
        var sum = num1 + num2;

        document.write("<h1>Result</h1>");
        document.write("<p>Sum of " + num1 + " and " + num2 + " is " + sum + "</p>");

        // question#2-------------------------
        document.write("<h1>question#2 CHAPTER - 5</h1>");

        var num1 = 3;
        var num2 = 5;

        // Calculate the sum
        var sum = num1 + num2;

        // Calculate the subtraction
        var difference = num1 - num2;

        // Calculate the multiplication
        var product = num1 * num2;

        // Calculate the division
        var quotient = num1 / num2;

        // Calculate the modulus
        var modulus = num1 % num2;

        //results
        document.write("<h1>Results</h1>");
        document.write("<p>Sum of " + num1 + " and " + num2 + " is " + sum + "</p>");
        document.write("<p>Subtraction of " + num1 + " and " + num2 + " is " + difference + "</p>");
        document.write("<p>Multiplication of " + num1 + " and " + num2 + " is " + product + "</p>");
        document.write("<p>Division of " + num1 + " and " + num2 + " is " + quotient + "</p>");
        document.write("<p>Modulus of " + num1 + " and " + num2 + " is " + modulus + "</p>");

        // question#3---------------------
        document.write("<h1>question#3 CHAPTER - 5</h1>");

        var myVariable;

        document.write("Value after variable declaration is: " + myVariable + "<br>");

        myVariable = 5;

        document.write("Initial value: " + myVariable + "<br>");

        myVariable++;

        document.write("Value after increment is: " + myVariable + "<br>");

        myVariable += 7;

        document.write("Value after addition is: " + myVariable + "<br>");

        myVariable--;

        document.write("Value after decrement is: " + myVariable + "<br>");

        var remainder = myVariable % 3;

        document.write("The remainder is: " + remainder + "<br>");

        // question#4---------------------
        document.write("<h1>question#4 CHAPTER - 5</h1>");

        var ticketPrice = 600;

        var totalCost = ticketPrice * 5;


        document.write("Total Cost to buy 5 tickets to a movie is " + totalCost + "PKR");

        // question#5---------------------
        document.write("<h1>question#5 CHAPTER - 5</h1>");
        document.write("<h1>Table of x5</h1>");

        document.write("<h2>Multiplication Table of 5</h2>");
        for (var i = 1; i <= 10; i++) {
            document.write("5 x " + i + " = " + (5 * i) + "<br>");
        }

        // question#6---------------------
        document.write("<h1>question#6 CHAPTER - 5</h1>");
        document.write("<h1>The Temperature Converter</h1>");

        var celsiusTemp = 25;

        var fahrenheitTemp = (celsiusTemp * 9 / 5) + 32;

        document.write(celsiusTemp + "°C is " + fahrenheitTemp + "°F<br>");

        var fahrenheitTemp2 = 77;

        var celsiusTemp2 = (fahrenheitTemp2 - 32) * 5 / 9;

        document.write(fahrenheitTemp2 + "°F is " + celsiusTemp2 + "°C");

        // question#7---------------------
        document.write("<h1>question#7 CHAPTER - 5</h1>");
        document.write("<h1>shopping Cart</h1>");

        var priceItem1 = 650;
        var priceItem2 = 100;
        var quantityItem1 = 3;
        var quantityItem2 = 7;
        var shippingCharges = 100;

        var totalItem1 = priceItem1 * quantityItem1;
        var totalItem2 = priceItem2 * quantityItem2;
        var subtotal = totalItem1 + totalItem2;
        var totalCost = subtotal + shippingCharges;

        document.write("<h2>Receipt</h2>");
        document.write("<p>Price of Item 1: " + priceItem1 + " PKR</p>");
        document.write("<p>Quantity of Item 1: " + quantityItem1 + "</p>");
        document.write("<p>Price of Item 2: " + priceItem2 + " PKR</p>");
        document.write("<p>Quantity of Item 2: " + quantityItem2 + "</p>");
        document.write("<p>Shipping Charges: " + shippingCharges + " PKR</p>");
        document.write("<p><strong>Total Cost of your order is " + totalCost + " PKR</strong></p>");

        // question#8---------------------
        document.write("<h1>question#8 CHAPTER - 5</h1>");
        document.write("<h1>Mark Sheet</h1>");

        var totalMarks = 980;
        var marksObtained = 804;

        var percentage = (marksObtained / totalMarks) * 100;

        document.write("<h2>Result</h2>");
        document.write("<p>Total Marks: " + totalMarks + "</p>");
        document.write("<p>Marks Obtained: " + marksObtained + "</p>");
        document.write("<p>Percentage: " + percentage.toFixed(2) + "%</p>");

        // question#9---------------------
        document.write("<h1>question#9 CHAPTER - 5</h1>");
        document.write("<h1>Currency in PKR</h1>");

        var totalUSDDollars = 10;
        var totalSARiyals = 25;
        var exchangeRateUSD = 104.80;
        var exchangeRateSAR = 28;

        var totalPKR = (totalUSDDollars * exchangeRateUSD) + (totalSARiyals * exchangeRateSAR);

        document.write("Total currency in PKR: " + totalPKR);

        // question#10---------------------
        document.write("<h1>question#10 CHAPTER - 5</h1>");

        var number = 10;
        var result = (((number + 5) * 10) / 2);

        document.write("Result: " + result);


        // question#11---------------------
        document.write("<h1>question#11 CHAPTER - 5</h1>");
        document.write("<h1>My age Calculator </h1>");

        var currentYear = new Date().getFullYear();

        var birthYear = 1983;

        var age1 = currentYear - birthYear;
        var age2 = age1 - 1;
        document.write("They are either " + age1 + " or " + age2 + " years old.");


        // question#12---------------------
        document.write("<h1>question#12 CHAPTER - 5</h1>");
        document.write("<h1>The Geometrizer </h1>");

        var radius = 20;
        var circumference = 2 * Math.PI * radius;
        var area = Math.PI * Math.pow(radius, 2);

        document.write("Radius of a circle: " + radius + "<br>");
        document.write("The circumference is: " + circumference.toFixed(2) + "<br>");
        document.write("The area is: " + area.toFixed(2));

        // question#13---------------------
        document.write("<h1>question#13 CHAPTER - 5</h1>");
        document.write("<h1>The Lifetime Supply Calculator</h1>");
        var favoriteSnack = "chocolate chip";
        var currentAge = 15;
        var maxAge = 65;
        var amountPerDay = 3;

        var yearsRemaining = maxAge - currentAge;
        var totalSnacksNeeded = yearsRemaining * 365 * amountPerDay;

        document.write("Favorite Snack: " + favoriteSnack + "<br>");
        document.write("Current age: " + currentAge + "<br>");
        document.write("Estimated maximum Age: " + maxAge + "<br>");
        document.write("Amount of snacks per day: " + amountPerDay + "<br>");
        document.write("You will need " + totalSnacksNeeded + " " + favoriteSnack + " to last you until the ripe old age of " + maxAge + ".");

        // CHAPTER #6_________________________________________________________________________

        // question#1 ------------------------

        document.write("<h1>question#1 CHAPTER - 6</h1>");
        document.write("<h1>Increment and Decrement</h1>");

        var a = 10;
        var a = 10;

        document.write("The value of a is: " + a + "<br>");
        document.write("___________<br>");

        document.write("The value of ++a is: " + (++a) + "<br>");
        document.write("Now the value of a is: " + a + "<br>");
        document.write("___________<br>");

        a = 10;

        document.write("The value of a++ is: " + (a++) + "<br>");
        document.write("Now the value of a is: " + a + "<br>");
        document.write("___________<br>");

        document.write("The value of --a is: " + (--a) + "<br>");
        document.write("Now the value of a is: " + a + "<br>");
        document.write("___________<br>");

        a = 11;

        document.write("The value of a-- is: " + (a--) + "<br>");
        document.write("Now the value of a is: " + a + "<br>");
        document.write("___________<br>");

        // question#2 ------------------------
        document.write("<h1>question#2 CHAPTER - 6</h1>");

        var a = 2,
            b = 1;
        var result = --a - --b + ++b + b--;

        document.write("a is " + a + "<br>");
        document.write("b is " + b + "<br>");
        document.write("result is " + result);

        // question#3 ------------------------
        document.write("<h1>question#3 CHAPTER - 6</h1>");

        var name = prompt("Enter your name:");
        document.write("Hello, " + name + "! Welcome to our website.");

        // question#5 ------------------------
        document.write("<h1>question#5 CHAPTER - 6</h1>");

        var number = prompt("Enter a number:");
        if (number === null || number === "") {
            number = 5;
        }
        document.write("<h2>Multiplication Table of " + number + "</h2>");
        for (var i = 1; i <= 10; i++) {
            document.write(number + " x " + i + " = " + (number * i) + "<br>");
        }

        // question#6 ------------------------
        document.write("<h1>question#6 CHAPTER - 6</h1>");

        var English = ("English:");
        var Math = ("Math:");
        var Urdu = ("Urdu:");
        var totalMarks = 100;

        var obtainedMarks1 = 54;
        var obtainedMarks2 = 54;
        var obtainedMarks3 = 48;

        var totalObtainedMarks = obtainedMarks1 + obtainedMarks2 + obtainedMarks3;
        var totalPercentage = (totalObtainedMarks / (totalMarks * 3)) * 100;

        document.write("<table border='0'>");
        document.write("<tr><th>Subject</th><th>Total Marks</th><th>Obtained Marks</th></tr>");
        document.write("<tr><td>" + English + "</td><td>" + totalMarks + "</td><td>" + obtainedMarks1 + "</td></tr>");
        document.write("<tr><td>" + Math + "</td><td>" + totalMarks + "</td><td>" + obtainedMarks2 + "</td></tr>");
        document.write("<tr><td>" + Urdu + "</td><td>" + totalMarks + "</td><td>" + obtainedMarks3 + "</td></tr>");
        document.write("<tr><td><strong>Total</strong></td><td><strong>" + (totalMarks * 3) + "</strong></td><td><strong>" + totalObtainedMarks + "</strong></td></tr>");
        document.write("<tr><td><strong>Percentage</strong></td><td></td><td><strong>" + totalPercentage.toFixed(2) + "%</strong></td></tr>");
        document.write("</table>");


        // Chapter 6 (Math Expression II)
        // question#1
        document.write("<h1>question#1 ------- Chapter 6 (Math Expression II)</h1>");
        x++;
        x += 1;

        // question#2
        document.write("<h1>question#2 ------- Chapter 6 (Math Expression II)</h1>");
        var x = 100;
        x--;
        document.write("The new value of x is: " + x);

        // question#3
        document.write("<h1>question#3 ------- Chapter 6 (Math Expression II)</h1>");
        var x = 50;
        var y = x++;

        document.write("The value of y is: " + y);

        // question#4
        document.write("<h1>question#4 ------- Chapter 6 (Math Expression II)</h1>");
        var y = 50;
        var z = --y;

        document.write("The value of z is: " + z);

        // question#5
        document.write("<h1>question#5 ------- Chapter 6 (Math Expression II)</h1>");

        var num = 10;
        var newNum = num--;

        document.write("num: " + num + "<br>");
        document.write("newNum: " + newNum);

        // question#6
        document.write("<h1>question#6 ------- Chapter 6 (Math Expression II)</h1>");


        var num = 10;
        var newNum = num++;

        document.write("num: " + num + "<br>");
        document.write("newNum: " + newNum);


        // question#7
        document.write("<h1>question#7 ------- Chapter 6 (Math Expression II)</h1>");

        var num = 5;
        num++;
        alert("The new value of num is: " + num);


        // Chapter 7 (Math Expression II)
        // question#1
        document.write("<h1>question#1 ------- Chapter 7 (Math Expression II)</h1>");

        var calculatedNum1 = 2 + (2 * 6);
        var calculatedNum2 = (2 + 2) * 6;

        document.write("For expression 1, calculatedNum is: " + calculatedNum1 + "<br>");
        document.write("For expression 2, calculatedNum is: " + calculatedNum2);

        // question#3
        document.write("<h1>question#3 ------- Chapter 7 (Math Expression II)</h1>");

        var calculatedNum = (2 + 2) * (4 + 2);
        document.write("The value of calculatedNum is: " + calculatedNum);

        // question#4
        document.write("<h1>question#4 ------- Chapter 7 (Math Expression II)</h1>");

        var calculatedNum = ((2 + 2) * 4) + 2;
        document.write("The value of calculatedNum is: " + calculatedNum);

        // question#5
        document.write("<h1>question#5 ------- Chapter 7 (Math Expression II)</h1>");
        var cost = (2 + 2) * (4 + 10);
        document.write("The value of cost is: " + cost);

        // question#6
        document.write("<h1>question#6 ------- Chapter 7 (Math Expression II)</h1>");
        var units = 2 + (2 * 4) + 10;
        document.write("The value of units is: " + units);

        // question#7
        document.write("<h1>question#7 ------- Chapter 7 (Math Expression II)</h1>");
        var pressure = (4 / 2) * 4;
        document.write("The value of pressure is: " + pressure);


        // Chapter 8 (Math Expression II)
        // question#1
        document.write("<h1>question#1 ----------------Chapter 8 (Concatenating Text Strings)</h1>");
        var num = "2" + "2";
        document.write(num);

        // // question#2
        document.write("<h1>question#2 ------------------Chapter 8 (Concatenating Text Strings)</h1>");
        // var message = "Hello" + " " + "Dolly";
        // alert("The value of message is: " + '"' + message + '"');
        // document.write("The value of message is: " + '"' + message + '"');

        // question#3
        document.write("<h1>question#3 ------------------Chapter 8 (Concatenating Text Strings)</h1>");
        // var message = ("33" + 3);

        // document.write("33" + 3);
        // alert = (message);

        // question#4
        document.write("<h1>question#4 ------------------Chapter 8 (Concatenating Text Strings)</h1>");

        // var message = "Pakistan" + " Zindabad";
        // alert(message);


        // question#5
        document.write("<h1>question#5 ------------------Chapter 8 (Concatenating Text Strings)</h1>");
        var str = "Number is: " + 10;
        document.write(str);


        // question#6
        document.write("<h1>question#6 ------------------Chapter 8 (Concatenating Text Strings)</h1>");
        var str1 = "Hello, ";
        var str2 = "world!";
        var str3 = str1 + str2;

        document.write(str3);


        // Chapter 9 Chapter 9 (Prompts)
        // question#1
        document.write("<h1>question#1 ------------------Chapter 9 (Prompts))</h1>");
        var firstName = prompt("Enter first name:");

        // question#2
        document.write("<h1>question#2 ------------------Chapter 9 (Prompts))</h1>");

        var country = prompt("Country", "China");

        // question#3
        document.write("<h1>question#3 ------------------Chapter 9 (Prompts))</h1>");
        var yourName = prompt("Enter Your Name");

        // question#4
        document.write("<h1>question#4 ------------------Chapter 9 (Prompts))</h1>");
        var userInput = prompt("Enter your favorite color:", "Blue");
        document.write("You entered: " + userInput);

        // question#5
        document.write("<h1>question#5 ------------------Chapter 9 (Prompts))</h1>");
        var message = "Enter your age:";
        var defaultResponse = "25";

        var userResponse = prompt(message, defaultResponse);
        document.write("You entered: " + userResponse);

        // question#6
        document.write("<h1>question#6 ------------------Chapter 9 (Prompts))</h1>");

        var message = "Enter your email address:";
        var defaultResponse = "example@example.com";

        var userResponse = prompt(message, defaultResponse);
        alert("Your email address is: " + userResponse);