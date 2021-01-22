var textDefs = [

//1
`<h2>Expedited Removal</h2>
<p class="bodyText">Individuals who present improper or fraudulent documents for entry or meet certain other criteria are deported without an immigration hearing.<sup>[1]<sup></p>
`,
//2
`
<h2>PACR/HARP/ACA</h2>
<p class="bodyText"><em>PACR (Prompt Asylum Review Process):</em> Pathway to &ldquo;promptly address credible fear claims.&rdquo;<sup>[2]</sup> <em>HARP (Humanitarian Asylum Review Process): </em>&ldquo;Promptly address[es] credible fear claims of amenable Mexican
        nationals.&rdquo;<sup>[3]</sup> <em>ACA (Asylum Cooperation Agreement): </em> migrants are deported to a northern
        triangle country where they can allegedly seek asylum instead.<sup>[4]</sup></p>
`,
//3
`<h2>Notice to Appear/Order of Recognizance - Released</h2>
<p class="bodyText">Release on own recognizance pending appearance before an immigration judge.<sup>[5]</sup>
</p>
`,
//4
`<h2>Reinstatement of Prior Removal</h2>
<p class="bodyText">Administrative removal without hearing or review for people who returned after a prior deportation. Usually disqualifies further legal relief except in cases related to fear of return.<sup>[6]</sup></p> 
`,
//5
`
<h2>Voluntary Return</h2>
<p class="bodyText">Agreement to a &ldquo;voluntary&rdquo; supervised departure instead of undergoing a
        formal removal process.<sup>[7]</sup></p>
`,
//6
`
<h2>Warrant/Notice to Appear (NTA) - Detained</h2>
<p class="bodyText">Individuals issued a notice to appear and held in custody pending appearance before an
        immigration judge.<sup>[8]</sup></p>
`,
//7
`
<h2>Migrant Protection Protocols</h2>
<p class="bodyText">AKA the &ldquo;remain in Mexico&rdquo; policy. Migrants seeking admission to the United
        States are deported to Mexico to await immigration proceedings.<sup>[9]</sup></p>
`,
//8
`
<h2>Other</h2>
<p class="bodyText">No final disposition at time of data collection or disposition category not listed here.<sup>[10]</sup></p>
`,
//9
`
<h2>Title 42</h2>
<p class="bodyText">In March 2020, the CDC under then-president Trump issued an order
        under Title 42 of the Public Health Service Act, alleging that, with respect to Covid-19, the &ldquo;danger is
        so increased by the introduction of persons from [Canada, Mexico, and other origin countries] that a temporary
        suspension of such introduction is necessary to protect public health.&rdquo;<sup>[11]</sup> Supported by this order, US
        Customs and Border Patrol has largely abandoned its normal avenues for processing incoming extralegal migrants
        and asylum seekers, instead immediately expelling them to their country of last transit or, if that is not
        possible, their country of origin.<sup>[12]</sup></p>
`
]
var references = 
`
<h2 id = "addendaHeader">Notes</h2>
<p class = "bodyText">Kyle Palermo, 2021. More work at <a href="https://www.kylepalermo.com/">kylepalermo.com</a>. You can find my annotated data <a href="https://docs.google.com/spreadsheets/d/1Xnqg5F6sxaJX70f9Cl5GXqqNBaXNqmI0iHC1bHsZVsc/edit?usp=sharing">here</a>. Github repo is <a href="https://github.com/kylespalermo/USCBP_Viz">here</a>.<br><br></p>
<ol class = "bodyText">
    <li>DHS, &ldquo;<a
                href="https://www.google.com/url?q=https://www.dhs.gov/sites/default/files/publications/immigration-statistics/yearbook/2019/enforcement_actions_2019.pdf&amp;sa=D&amp;ust=1611177012119000&amp;usg=AOvVaw3MIadyyn2fSb6pSVU3-Xd_">Immigration
                Enforcement Actions: 2019</a>,&rdquo; page 3. </li>
    <li>US CBP, &ldquo;<a
                href="https://www.google.com/url?q=https://www.cbp.gov/newsroom/stats/custody-and-transfer-statistics&amp;sa=D&amp;ust=1611177012119000&amp;usg=AOvVaw36SgCIlG1Q7Bg_F5Iriocf">Custody
                and Transfer Statistics FY2021</a>.&rdquo;</li>
    <li>ibid.</li>
    <li>DHS, &ldquo;<a
                href="https://www.google.com/url?q=https://www.dhs.gov/news/2020/12/15/el-salvador-begins-implementation-asylum-cooperative-agreement&amp;sa=D&amp;ust=1611177012120000&amp;usg=AOvVaw2nOutvt0l7bynwXPfE8vec">El
                Salvador Begins Implementation of Asylum Cooperative Agreement</a>.&rdquo;</li>
    <li>DHS, &ldquo;<a
                href="https://www.google.com/url?q=https://www.dhs.gov/sites/default/files/publications/immigration-statistics/yearbook/2019/enforcement_actions_2019.pdf&amp;sa=D&amp;ust=1611177012120000&amp;usg=AOvVaw3n1cRw3vYiBb9m1SfeyZ8W">Immigration
                Enforcement Actions: 2019</a>,&rdquo; page 2.</li>
    <li>ibid, page 3.</li>
    <li>ibid, page 2.</li>
    <li>ibid, page 1.</li>
    <li>DHS, &ldquo;<a
                href="https://www.google.com/url?q=https://www.dhs.gov/news/2019/01/24/migrant-protection-protocols&amp;sa=D&amp;ust=1611177012121000&amp;usg=AOvVaw1ZKWb85gB4EDIpxhp3bNV5">Migrant
                Protection Protocols</a>.&rdquo;</li>
    <li>US CBP, &ldquo;<a
                href="https://www.google.com/url?q=https://www.cbp.gov/newsroom/stats/custody-and-transfer-statistics&amp;sa=D&amp;ust=1611177012121000&amp;usg=AOvVaw3A3lPDD4dus3FDYheJZFKw">Custody
                and Transfer Statistics FY2021</a>.&rdquo;</li>
    <li>CDC, &ldquo;<a
                href="https://www.google.com/url?q=https://www.cdc.gov/quarantine/pdf/CDC-Order-Prohibiting-Introduction-of-Persons_Final_3-20-20_3-p.pdf&amp;sa=D&amp;ust=1611177012122000&amp;usg=AOvVaw0AYQJLLiCMQcEFnJWvwmJz">Order
                Suspending Introduction of Certain Persons from Countries where a Communicable Disease
                Exists</a>.&rdquo;</li>
    <li>US CBP, &ldquo;<a
                href="https://www.google.com/url?q=https://www.cbp.gov/newsroom/stats/cbp-enforcement-statistics/title-8-and-title-42-statistics&amp;sa=D&amp;ust=1611177012122000&amp;usg=AOvVaw1vGGiTWYn753Rvu7xQxXVU">Nationwide
                Enforcement Encounters: Title 8 Enforcement Actions and Title 42
                Expulsions</a>.&rdquo;</li>
</ol>
`;

var linksText = 
`
<h2 id = "addendaHeader">Links</h2>
<p class = "bodyText">Kevin Sieff, “<a href = "https://www.thisamericanlife.org/721/the-walls-close-in/act-one-18">The People Up the Stairs</a>.” <em>This American Life</em> episode 721.<br>
Molly O’Toole, “<a href = "https://www.latimes.com/politics/story/2021-01-20/trump-immigration-border-wall-issues-test-biden-policies">Biden inherits border chaos from Trump, but for now his next steps are uncertain</a>.” <em>Los Angeles Times</em>.<br>
Human Rights Watch, “<a href="https://www.hrw.org/news/2021/01/14/hrw-letter-biden-transition-team#_ftn10HRW">Letter to the Biden Transition Team Regarding Ensuring Humanitarian Border Reception</a>.”<br>
</p>
`
;