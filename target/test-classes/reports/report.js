$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("LoginWithEmail.feature");
formatter.feature({
  "line": 1,
  "name": "Login with email",
  "description": "",
  "id": "login-with-email",
  "keyword": "Feature"
});
formatter.before({
  "duration": 5755790,
  "status": "passed"
});
formatter.scenario({
  "line": 3,
  "name": "Login with valid credentials",
  "description": "",
  "id": "login-with-email;login-with-valid-credentials",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 4,
  "name": "LandingPage is opened",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "User clicks Log in link",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "SignIn popup is loaded",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "User Signs in with login \"olegmarket3@gmail.com\" and password \"123456\"",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "HomePage is loaded",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginWithEmailSteps.homepage_is_opened()"
});
formatter.result({
  "duration": 6353763243,
  "status": "passed"
});
formatter.match({
  "location": "LoginWithEmailSteps.user_clicks_Log_in_link()"
});
formatter.result({
  "duration": 69826362,
  "status": "passed"
});
formatter.match({
  "location": "LoginWithEmailSteps.signin_popup_is_loaded()"
});
formatter.result({
  "duration": 677116589,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "olegmarket3@gmail.com",
      "offset": 26
    },
    {
      "val": "123456",
      "offset": 63
    }
  ],
  "location": "LoginWithEmailSteps.user_Signs_in_with_login_and_password(String,String)"
});
formatter.result({
  "duration": 432881618,
  "status": "passed"
});
formatter.match({
  "location": "LoginWithEmailSteps.homepage_is_loaded()"
});
formatter.result({
  "duration": 4342208996,
  "error_message": "Element not found {By.id: search}\nExpected: visible\nScreenshot: file:/K:/Job/Testing/Scopic/build/reports/tests/1505424029714.0.png\nTimeout: 4 s.\nCaused by: NoSuchElementException: no such element: Unable to locate element: {\"method\":\"id\",\"selector\":\"search\"}\r\n\tat com.codeborne.selenide.impl.WebElementSource.createElementNotFoundError(WebElementSource.java:31)\r\n\tat com.codeborne.selenide.impl.ElementFinder.createElementNotFoundError(ElementFinder.java:82)\r\n\tat com.codeborne.selenide.impl.WebElementSource.checkCondition(WebElementSource.java:59)\r\n\tat com.codeborne.selenide.commands.Should.should(Should.java:35)\r\n\tat com.codeborne.selenide.commands.Should.execute(Should.java:29)\r\n\tat com.codeborne.selenide.commands.Should.execute(Should.java:12)\r\n\tat com.codeborne.selenide.commands.Commands.execute(Commands.java:143)\r\n\tat com.codeborne.selenide.impl.SelenideElementProxy.dispatchAndRetry(SelenideElementProxy.java:87)\r\n\tat com.codeborne.selenide.impl.SelenideElementProxy.invoke(SelenideElementProxy.java:63)\r\n\tat com.sun.proxy.$Proxy16.shouldBe(Unknown Source)\r\n\tat helpers.Helper.allElementsLoaded(Helper.java:13)\r\n\tat pages.HomePage.allElementsLoaded(HomePage.java:40)\r\n\tat steps.LoginWithEmailSteps.homepage_is_loaded(LoginWithEmailSteps.java:40)\r\n\tat ✽.Then HomePage is loaded(LoginWithEmail.feature:8)\r\nCaused by: org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"id\",\"selector\":\"search\"}\n  (Session info: chrome\u003d61.0.3163.79)\n  (Driver info: chromedriver\u003d2.32.498550 (9dec58e66c31bcc53a9ce3c7226f0c1c5810906a),platform\u003dWindows NT 10.0.15063 x86_64) (WARNING: The server did not provide any stacktrace information)\nCommand duration or timeout: 8 milliseconds\nFor documentation on this error, please visit: http://seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.4.0\u0027, revision: \u0027unknown\u0027, time: \u0027unknown\u0027\nSystem info: host: \u0027DESKTOP-B8NEL8U\u0027, ip: \u0027192.168.1.217\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_131\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities [{applicationCacheEnabled\u003dfalse, rotatable\u003dfalse, mobileEmulationEnabled\u003dfalse, networkConnectionEnabled\u003dfalse, chrome\u003d{chromedriverVersion\u003d2.32.498550 (9dec58e66c31bcc53a9ce3c7226f0c1c5810906a), userDataDir\u003dC:\\Users\\luckyPC\\AppData\\Local\\Temp\\scoped_dir13968_7926}, takesHeapSnapshot\u003dtrue, pageLoadStrategy\u003dnormal, databaseEnabled\u003dfalse, handlesAlerts\u003dtrue, hasTouchScreen\u003dfalse, version\u003d61.0.3163.79, platform\u003dXP, browserConnectionEnabled\u003dfalse, nativeEvents\u003dtrue, acceptSslCerts\u003dtrue, locationContextEnabled\u003dtrue, webStorageEnabled\u003dtrue, browserName\u003dchrome, takesScreenshot\u003dtrue, javascriptEnabled\u003dtrue, cssSelectorsEnabled\u003dtrue, setWindowRect\u003dtrue, unexpectedAlertBehaviour\u003d}]\nSession ID: 4502dc567287bfa8b58df0154644a0d8\n*** Element info: {Using\u003did, value\u003dsearch}\r\n\tat sun.reflect.GeneratedConstructorAccessor10.newInstance(Unknown Source)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:215)\r\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:167)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:671)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:410)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementById(RemoteWebDriver.java:453)\r\n\tat org.openqa.selenium.By$ById.findElement(By.java:218)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:402)\r\n\tat com.codeborne.selenide.impl.WebElementSelector.findElement(WebElementSelector.java:28)\r\n\tat com.codeborne.selenide.impl.ElementFinder.getWebElement(ElementFinder.java:56)\r\n\tat com.codeborne.selenide.impl.WebElementSource.checkCondition(WebElementSource.java:44)\r\n\tat com.codeborne.selenide.commands.Should.should(Should.java:35)\r\n\tat com.codeborne.selenide.commands.Should.execute(Should.java:29)\r\n\tat com.codeborne.selenide.commands.Should.execute(Should.java:12)\r\n\tat com.codeborne.selenide.commands.Commands.execute(Commands.java:143)\r\n\tat com.codeborne.selenide.impl.SelenideElementProxy.dispatchAndRetry(SelenideElementProxy.java:87)\r\n\tat com.codeborne.selenide.impl.SelenideElementProxy.invoke(SelenideElementProxy.java:63)\r\n\tat com.sun.proxy.$Proxy16.shouldBe(Unknown Source)\r\n\tat helpers.Helper.allElementsLoaded(Helper.java:13)\r\n\tat pages.HomePage.allElementsLoaded(HomePage.java:40)\r\n\tat steps.LoginWithEmailSteps.homepage_is_loaded(LoginWithEmailSteps.java:40)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.lang.reflect.Method.invoke(Method.java:498)\r\n\tat cucumber.runtime.Utils$1.call(Utils.java:40)\r\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:16)\r\n\tat cucumber.runtime.Utils.invoke(Utils.java:34)\r\n\tat cucumber.runtime.java.JavaStepDefinition.execute(JavaStepDefinition.java:38)\r\n\tat cucumber.runtime.StepDefinitionMatch.runStep(StepDefinitionMatch.java:37)\r\n\tat cucumber.runtime.Runtime.runStep(Runtime.java:300)\r\n\tat cucumber.runtime.model.StepContainer.runStep(StepContainer.java:44)\r\n\tat cucumber.runtime.model.StepContainer.runSteps(StepContainer.java:39)\r\n\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:44)\r\n\tat cucumber.runtime.junit.ExecutionUnitRunner.run(ExecutionUnitRunner.java:102)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:63)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:18)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat cucumber.runtime.junit.FeatureRunner.run(FeatureRunner.java:70)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:95)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:38)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat cucumber.api.junit.Cucumber.run(Cucumber.java:100)\r\n\tat org.junit.runner.JUnitCore.run(JUnitCore.java:137)\r\n\tat com.intellij.junit4.JUnit4IdeaTestRunner.startRunnerWithArgs(JUnit4IdeaTestRunner.java:68)\r\n\tat com.intellij.rt.execution.junit.IdeaTestRunner$Repeater.startRunnerWithArgs(IdeaTestRunner.java:51)\r\n\tat com.intellij.rt.execution.junit.JUnitStarter.prepareStreamsAndStart(JUnitStarter.java:242)\r\n\tat com.intellij.rt.execution.junit.JUnitStarter.main(JUnitStarter.java:70)\r\n",
  "status": "failed"
});
formatter.embedding("image/png", "embedded0.png");
formatter.after({
  "duration": 278025148,
  "status": "passed"
});
formatter.after({
  "duration": 62482892,
  "status": "passed"
});
});