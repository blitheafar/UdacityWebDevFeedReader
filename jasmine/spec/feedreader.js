/* feedreader.js
 *
 * This is the spec file that Jasmine will read and contains
 * all of the tests that will be run against your application.
 */
 // 这个文件为规格文件，Jasmine测试框架会读取规格文件包含的所有测试方法

/* We're placing all of our tests within the $() function,
 * since some of these tests may require DOM elements. We want
 * to ensure they don't run until the DOM is ready.
 */
 //将所有测试套件放进了$()中，确保测试方法在Dom加载完毕后再执行
$(function() {
    /* This is our first test suite - a test suite just contains
    * a related set of tests. This suite is all about the RSS
    * feeds definitions, the allFeeds variable in our application.
    */
    //第一个测试套件，只包含相关的测试方法，这个测试套件是关于阅读器测试的定义，allFeeds变量位于应用内
    describe('订阅阅读器', function() {
        /* This is our first test - it tests to make sure that the
         * allFeeds variable has been defined and that it is not
         * empty. Experiment with this before you get started on
         * the rest of this project. What happens when you change
         * allFeeds in app.js to be an empty array and refresh the
         * page?
         */
         //第一个测试方法确保allFeeds变量被定义，且不为空
        it('allFeeds定义', function() {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });


        /* TODO: Write a test that loops through each feed
         * in the allFeeds object and ensures it has a URL defined
         * and that the URL is not empty.
         */
         //写一个测试方法，遍历allFeeds对象，确保其存在URL定义，且URL不为空
         it('url已定义',function() {
           for (feed of allFeeds) {
             expect(feed.url).toBeDefined();
             expect(feed.url).not.toBe('');
           }
         });



        /* TODO: Write a test that loops through each feed
         * in the allFeeds object and ensures it has a name defined
         * and that the name is not empty.
         */
         //写一个测试方法，遍历allFeeds对象，确保其name存在，且不为空
         it('name已定义',function() {
           for (feed of allFeeds) {
             expect(feed.name).toBeDefined();
             expect(feed.name).not.toBe('');
           }
         });

    });


    /* TODO: Write a new test suite named "The menu" */

        /* TODO: Write a test that ensures the menu element is
         * hidden by default. You'll have to analyze the HTML and
         * the CSS to determine how we're performing the
         * hiding/showing of the menu element.
         */

         /* TODO: Write a test that ensures the menu changes
          * visibility when the menu icon is clicked. This test
          * should have two expectations: does the menu display when
          * clicked and does it hide when clicked again.
          */

    /* TODO: Write a new test suite named "Initial Entries" */

        /* TODO: Write a test that ensures when the loadFeed
         * function is called and completes its work, there is at least
         * a single .entry element within the .feed container.
         * Remember, loadFeed() is asynchronous so this test will require
         * the use of Jasmine's beforeEach and asynchronous done() function.
         */

    /* TODO: Write a new test suite named "New Feed Selection" */

        /* TODO: Write a test that ensures when a new feed is loaded
         * by the loadFeed function that the content actually changes.
         * Remember, loadFeed() is asynchronous.
         */
}());
