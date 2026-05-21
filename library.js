const pages = [

`
<h1>🌙 Moonlight Story</h1>

<p class="author">
written by web owner
</p>
`,

`
<h1>🌙 Moonlight Story</h1>

<p class="author">
written by web owner
</p>

<p class="intro">

Rain softly touched the café windows.

<br><br>

The city lights reflected quietly
across the empty streets.

</p>
`,

`
<div class="story-text">

<p>

Somewhere inside the warm café,
a lonely reader turned another page.

</p>

<p>

The smell of coffee drifted slowly
through the quiet room while old jazz
music whispered from a dusty speaker.

</p>

</div>
`,

`
<div class="story-text">

<p>

The café was almost empty tonight.

</p>

<p>

Only one lamp remained lit near the
corner bookshelf where dozens of old
novels rested quietly beneath golden light.

</p>

<p>

Outside, rain continued falling across
the silent streets of the city.

</p>

</div>
`,

`
<div class="story-text">

<p>

A girl wearing a dark brown coat stepped
through the café door.

</p>

<p>

Tiny drops of rain still clung to her hair.

</p>

<p>

For a moment, the entire café felt still.

</p>

</div>
`,

`
<div class="story-text">

<p>

She walked slowly between the bookshelves,
running her fingers gently across old covers
as if searching for something forgotten.

</p>

<p>

The reader quietly watched from the corner.

</p>

</div>
`,

`
<div class="story-text">

<p>

Finally, the girl stopped in front of
a small blue book hidden between larger novels.

</p>

<p>

Moonlight Story.

</p>

<p>

A faint smile appeared on her face.

</p>

</div>
`,

`
<div class="story-text">

<p>

"You still read books this late at night?"

</p>

<p>

Her voice was soft,
almost blending into the rain outside.

</p>

<p>

The reader looked up quietly.

</p>

</div>
`,

`
<div class="story-text">

<p>

"Sometimes stories feel warmer than people."

</p>

<p>

The girl laughed softly before sitting
across the table beside the window.

</p>

<p>

Between them rested a single cup of coffee,
still releasing gentle warmth into the cold night.

</p>

</div>
`,

`
<div class="story-text">

<p>

Minutes passed peacefully.

</p>

<p>

Neither of them spoke again.

</p>

<p>

Yet somehow,
the silence no longer felt lonely.

</p>

</div>
`

];

let currentPage = 0;

function flipPage(){

    const page =
    document.getElementById("page");

    page.classList.add("flip");

    setTimeout(() => {

        currentPage++;

        if(currentPage >= pages.length){

            currentPage = 0;
        }

        document.getElementById(
            "story-content"
        ).innerHTML =
        pages[currentPage];

        page.classList.remove("flip");

    }, 300);
}
function openStory(){

    window.location.href = "story.html";
}