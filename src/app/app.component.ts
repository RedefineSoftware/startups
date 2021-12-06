import { Component } from '@angular/core';

@Component({
  selector: 'rs-root',
  template: `
    <div class="header">
      <div class="logo">
        <img src="/assets/images/beaker.svg" width="40" /><h1>Startup Resources</h1>
      </div>
    </div>
    <div class="page">
      <div class="nav">
        <ul>
          <li><a href="#mvp">Defining Your MVP</a></li>
          <li><a href="#testing-assumptions">Testing Assumptions</a></li>
          <li></li>
          <li></li>
        </ul>

        <ul>
          <li><a href="#bookshelf">Startup Bookshelf</a></li>
          <li><a href="#writing">Writing</a></li>
          <li><a href="#speaking">Speaking</a></li>
        </ul>
        
      </div>


      <div class="content">
        <section>
          <a id="mvp"></a>
          <h1>Defining Your MVP</h1>

          <div class="rs-card-row">
            <div class="rs-card">
              <div class="rs-card__media">
                <iframe width="320" height="180" src="https://www.youtube.com/embed/oQOC-qy-GDY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
              </div>

              <div class="rs-card__content">
                <h6>How to Start a Startup</h6>
                <h1>How to Get Started</h1>
                <p>Transcript: <a href="https://genius.com/4203034" target="_blank">https://genius.com/4203034</a></p>
              </div>
            </div>

            <div class="rs-card">
              <div class="rs-card__media">
                <iframe width="320" height="180" src="https://www.youtube.com/embed/pvIN9STpzCQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
              </div>

              <div class="rs-card__content">
                <h6>Railsware Product Academy</h6>
                <h1>Lean Canvas Intro</h1>
              </div>
            </div>
          </div>
          <div class="rs-card-row">
            <div class="rs-card">
              <div class="rs-card__media">
                <iframe width="320" height="180" src="https://www.youtube.com/embed/5-TgqZ8nado" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
              </div>

              <div class="rs-card__content">
                <h6>Paul Graham</h6>
                <h1>Do Things That Don't Scale</h1>
                <p>Essay: <a href="http://paulgraham.com/ds.html" target="_blank">http://paulgraham.com/ds.html</a></p>
              </div>
            </div>
          </div>
        </section>

        <section>
          <!-- Test Assumptions -->
          <a id="testing-assumptions"></a>
          <h1>Testing Assumptions</h1>

          <div class="rs-card-row">
            <div class="rs-card">
              <div class="rs-card__media">
                <iframe width="320" height="180" src="https://www.youtube.com/embed/FG1Fa-t4AEQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
              </div>

              <div class="rs-card__content">
                <h6>Rob Fitzpatrick</h6>
                <h1>How to Talk to Customers</h1>
                "The Mom Test"
              </div>
            </div>

            <div class="rs-card">
              <div class="rs-card__media">
                <iframe width="320" height="180" src="https://www.youtube.com/embed/IFjZkRbXhiA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
              </div>

              <div class="rs-card__content">
                <h6>Strategyzer</h6>
                <h1>Testing Business Ideas Webinar</h1>
              </div>
            </div>
          </div>
        </section>
        

        <!-- Reading -->
        <section>
          <a id="bookshelf"></a>
          <h1>Startup Bookshelf</h1>

          <!-- <img src="https://firebasestorage.googleapis.com/v0/b/firescript-577a2.appspot.com/o/imgs%2Fapp%2FCoulee%2FXYRhmMvnpq.png?alt=media&token=d95cbf1e-6f97-4c65-82c5-46d2fb9ccce6" width="300" /> -->

          <div id="gr_grid_widget_1638652714">
            <!-- Show static html as a placeholder in case js is not enabled - javascript include will override this if things work -->
            <div class="gr_grid_container">
              <div class="gr_grid_book_container"><a title="Zero to One: Notes on Startups, or How to Build the Future" rel="nofollow" href="https://www.goodreads.com/book/show/18050143-zero-to-one"><img alt="Zero to One: Notes on Startups, or How to Build the Future" border="0" src="https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1630663027l/18050143._SX98_.jpg" /></a></div>
              <div class="gr_grid_book_container"><a title="Never Split the Difference: Negotiating As If Your Life Depended On It" rel="nofollow" href="https://www.goodreads.com/book/show/26156469-never-split-the-difference"><img alt="Never Split the Difference: Negotiating As If Your Life Depended On It" border="0" src="https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1460910517l/26156469._SX98_.jpg" /></a></div>
              <div class="gr_grid_book_container"><a title="Creative Selection: Inside Apple's Design Process During the Golden Age of Steve Jobs" rel="nofollow" href="https://www.goodreads.com/book/show/37638098-creative-selection"><img alt="Creative Selection: Inside Apple's Design Process During the Golden Age of Steve Jobs" border="0" src="https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1531233879l/37638098._SX98_.jpg" /></a></div>
              <div class="gr_grid_book_container"><a title="Radical Candor: Be a Kickass Boss Without Losing Your Humanity" rel="nofollow" href="https://www.goodreads.com/book/show/29939161-radical-candor"><img alt="Radical Candor: Be a Kickass Boss Without Losing Your Humanity" border="0" src="https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1482838407l/29939161._SX98_.jpg" /></a></div>
              <div class="gr_grid_book_container"><a title="It Doesn't Have to Be Crazy at Work" rel="nofollow" href="https://www.goodreads.com/book/show/38900866-it-doesn-t-have-to-be-crazy-at-work"><img alt="It Doesn't Have to Be Crazy at Work" border="0" src="https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1526057292l/38900866._SX98_.jpg" /></a></div>
              <div class="gr_grid_book_container"><a title="Shape Up: Stop Running in Circles and Ship Work that Matters" rel="nofollow" href="https://www.goodreads.com/book/show/50776459-shape-up"><img alt="Shape Up: Stop Running in Circles and Ship Work that Matters" border="0" src="https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1569345815l/50776459._SX98_SY160_.jpg" /></a></div>
              <div class="gr_grid_book_container"><a title="Remote: Office Not Required" rel="nofollow" href="https://www.goodreads.com/book/show/17316682-remote"><img alt="Remote: Office Not Required" border="0" src="https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1363265098l/17316682._SX98_.jpg" /></a></div>
              <div class="gr_grid_book_container"><a title="The Innovation Stack: Building an Unbeatable Business One Crazy Idea at a Time" rel="nofollow" href="https://www.goodreads.com/book/show/50748232-the-innovation-stack"><img alt="The Innovation Stack: Building an Unbeatable Business One Crazy Idea at a Time" border="0" src="https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1576629144l/50748232._SX98_SY160_.jpg" /></a></div>
              <div class="gr_grid_book_container"><a title="Creativity, Inc.: Overcoming the Unseen Forces That Stand in the Way of True Inspiration" rel="nofollow" href="https://www.goodreads.com/book/show/18077903-creativity-inc"><img alt="Creativity, Inc.: Overcoming the Unseen Forces That Stand in the Way of True Inspiration" border="0" src="https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1400863577l/18077903._SX98_.jpg" /></a></div>
              <div class="gr_grid_book_container"><a title="Working Backwards: Insights, Stories, and Secrets from Inside Amazon" rel="nofollow" href="https://www.goodreads.com/book/show/53138083-working-backwards"><img alt="Working Backwards: Insights, Stories, and Secrets from Inside Amazon" border="0" src="https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1606707026l/53138083._SX98_.jpg" /></a></div>
              <div class="gr_grid_book_container"><a title="The Coaching Habit: Say Less, Ask More & Change the Way You Lead Forever" rel="nofollow" href="https://www.goodreads.com/book/show/29342515-the-coaching-habit"><img alt="The Coaching Habit: Say Less, Ask More & Change the Way You Lead Forever" border="0" src="https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1456463829l/29342515._SX98_.jpg" /></a></div>
              <div class="gr_grid_book_container"><a title="Ask Your Developer: How to Harness the Power of Software Developers and Win in the 21st Century" rel="nofollow" href="https://www.goodreads.com/book/show/48716700-ask-your-developer"><img alt="Ask Your Developer: How to Harness the Power of Software Developers and Win in the 21st Century" border="0" src="https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1592246495l/48716700._SX98_.jpg" /></a></div>
              <div class="gr_grid_book_container"><a title="Powerful: Building a Culture of Freedom and Responsibility" rel="nofollow" href="https://www.goodreads.com/book/show/36417234-powerful"><img alt="Powerful: Building a Culture of Freedom and Responsibility" border="0" src="https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1508080358l/36417234._SX98_.jpg" /></a></div>
              <div class="gr_grid_book_container"><a title="Out of the Crisis" rel="nofollow" href="https://www.goodreads.com/book/show/566574.Out_of_the_Crisis"><img alt="Out of the Crisis" border="0" src="https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1347485103l/566574._SX98_.jpg" /></a></div>
              <div class="gr_grid_book_container"><a title="The Organization Man" rel="nofollow" href="https://www.goodreads.com/book/show/725027.The_Organization_Man"><img alt="The Organization Man" border="0" src="https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1388713607l/725027._SX98_.jpg" /></a></div>
              <div class="gr_grid_book_container"><a title="The E-Myth Revisited: Why Most Small Businesses Don't Work and What to Do About It" rel="nofollow" href="https://www.goodreads.com/book/show/81948.The_E_Myth_Revisited"><img alt="The E-Myth Revisited: Why Most Small Businesses Don't Work and What to Do About It" border="0" src="https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1435673032l/81948._SX98_.jpg" /></a></div>
              <div class="gr_grid_book_container"><a title="Outcomes Over Output: Why customer behavior is the key metric for business success" rel="nofollow" href="https://www.goodreads.com/book/show/45186993-outcomes-over-output"><img alt="Outcomes Over Output: Why customer behavior is the key metric for business success" border="0" src="https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1555845154l/45186993._SX98_.jpg" /></a></div>
              <div class="gr_grid_book_container"><a title="Testing Business Ideas" rel="nofollow" href="https://www.goodreads.com/book/show/44056365-testing-business-ideas"><img alt="Testing Business Ideas" border="0" src="https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1569897834l/44056365._SX98_.jpg" /></a></div>
              <div class="gr_grid_book_container"><a title="Business Model Generation" rel="nofollow" href="https://www.goodreads.com/book/show/7723797-business-model-generation"><img alt="Business Model Generation" border="0" src="https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1384676138l/7723797._SX98_.jpg" /></a></div>
              <div class="gr_grid_book_container"><a title="Value Proposition Design: How to Create Products and Services Customers Want" rel="nofollow" href="https://www.goodreads.com/book/show/22337524-value-proposition-design"><img alt="Value Proposition Design: How to Create Products and Services Customers Want" border="0" src="https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1410066477l/22337524._SX98_.jpg" /></a></div>
              <noscript><br/>Share <a rel="nofollow" href="/">book reviews</a> and ratings with Chris, and even join a <a rel="nofollow" href="/group">book club</a> on Goodreads.</noscript>
            </div>
          </div>
        </section>


        <!-- Writing -->
        <section>
          <a id="writing"></a>
          <h1>Writing</h1>

          <!-- <p>writing is one of the most fundamental skills because it is equivalent to thinking</p> -->

          <div class="rs-card-row">
            <div class="rs-card">
              <div class="rs-card__media">
                <iframe width="320" height="180" src="https://www.youtube.com/embed/bfDOoADCfkg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
              </div>

              <div class="rs-card__content">
                <h6>Jordan Peterson</h6>
                <h1>On the Power of Writing</h1>
              </div>
            </div>

            <div class="rs-card">
              <div class="rs-card__media">
                <iframe width="320" height="180" src="https://www.youtube.com/embed/aFwVf5a3pZM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
              </div>

              <div class="rs-card__content">
                <h6>Larry McEnerney</h6>
                <h1>Writing Beyond the Academy</h1>
              </div>
            </div>
          </div>
        </section>

        <!-- <div class="guide">
          <h3>The Writing Well Handbook</h3>
          <h6>Julian Shapiro</h6>
          https://www.julian.com/guide/write/intro
        </div> -->

        <!-- <p>'In writing, habit seems to be a much stronger force than either willpower or inspiration. Consequently there must be some little quality of fierceness until the habit pattern of a certain number of words is established. There is no possibility, in me at least, of saying, “I’ll do it if I feel like it.” One never feels like awaking day after day. In fact, given the smallest excuse, one will not work at all. The rest is nonsense. Perhaps there are people who can work that way, but I cannot. I must get my words down every day whether they are any good or not.' - John Steinbeck</p> -->

        <!-- Speaking -->
        <section>
          <a id="speaking"></a>
          <h1>Speaking</h1>

          <div class="rs-card">
            <div class="rs-card__media">
              <iframe width="320" height="180" src="https://www.youtube.com/embed/Unzc731iCUY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>

            <div class="rs-card__content">
              <h6>Patrick Winston</h6>
              <h1>How to Speak</h1>
            </div>
          </div>
        </section>

        <section>
          <p>Copyright &copy; 2021 <a href="https://crabl.net/">Chris Rabl</a></p>
        </section>
      </div>
    </div>
    <router-outlet></router-outlet>
  `,
  styles: [`
    .content section:not(:first-child) {
      margin-top: 64px;
    }
    

    .placeholder {
      min-width: 320px;
      min-height: 120px;
      border: 1px solid gray;
      border-radius: 8px;
    }
  `]
})
export class AppComponent {
  title = 'startups';
}
