const albums = [
    {
        thumbnail: "asset/img/1.png",
        images: ["asset/img/1.png", "asset/img/2.png", "asset/img/3.png"]
    },
    {
        thumbnail: "asset/img/2.png",
        images: ["asset/img/4.png", "asset/img/5.png", "asset/img/1.png"]
    },
    {
        thumbnail: "asset/img/3.png",
        images: ["asset/img/2.png", "asset/img/3.png", "asset/img/4.png"]
    },
    {
        thumbnail: "asset/img/4.png",
        images: ["asset/img/1.png", "asset/img/2.png", "asset/img/3.png"]
    },
    {
        thumbnail: "asset/img/5.png",
        images: ["asset/img/4.png", "asset/img/5.png", "asset/img/1.png"]
    },
    {
        thumbnail: "asset/img/1.png",
        images: ["asset/img/2.png", "asset/img/3.png", "asset/img/4.png"]
    },
    {
        thumbnail: "asset/img/2.png",
        images: ["asset/img/1.png", "asset/img/2.png", "asset/img/3.png"]
    },
    {
        thumbnail: "asset/img/4.png",
        images: ["asset/img/4.png", "asset/img/5.png", "asset/img/1.png"]
    },
    {
        thumbnail: "asset/img/3.png",
        images: ["asset/img/2.png", "asset/img/3.png", "asset/img/4.png"]
    },
    {
        thumbnail: "asset/img/4.png",
        images: ["asset/img/1.png", "asset/img/2.png", "asset/img/3.png"]
    },
    {
        thumbnail: "asset/img/5.png",
        images: ["asset/img/4.png", "asset/img/5.png", "asset/img/1.png"]
    },
    {
        thumbnail: "asset/img/1.png",
        images: ["asset/img/2.png", "asset/img/3.png", "asset/img/4.png"]
    },
    {
        thumbnail: "asset/img/2.png",
        images: ["asset/img/1.png", "asset/img/2.png", "asset/img/3.png"]
    },
    {
        thumbnail: "asset/img/3.png",
        images: ["asset/img/4.png", "asset/img/5.png", "asset/img/1.png"]
    },
    {
        thumbnail: "asset/img/4.png",
        images: ["asset/img/2.png", "asset/img/3.png", "asset/img/4.png"]
    },
    {
        thumbnail: "asset/img/5.png",
        images: ["asset/img/1.png", "asset/img/2.png", "asset/img/3.png"]
    },
    {
        thumbnail: "asset/img/1.png",
        images: ["asset/img/4.png", "asset/img/5.png", "asset/img/1.png"]
    },
    {
        thumbnail: "asset/img/2.png",
        images: ["asset/img/2.png", "asset/img/3.png", "asset/img/4.png"]
    },
    {
        thumbnail: "asset/img/3.png",
        images: ["asset/img/1.png", "asset/img/2.png", "asset/img/3.png"]
    },
    {
        thumbnail: "asset/img/4.png",
        images: ["asset/img/4.png", "asset/img/5.png", "asset/img/1.png"]
    },
    {
        thumbnail: "asset/img/5.png",
        images: ["asset/img/2.png", "asset/img/3.png", "asset/img/4.png"]
    },
    {
        thumbnail: "asset/img/1.png",
        images: ["asset/img/1.png", "asset/img/2.png", "asset/img/3.png"]
    },
    {
        thumbnail: "asset/img/2.png",
        images: ["asset/img/4.png", "asset/img/5.png", "asset/img/1.png"]
    },
    {
        thumbnail: "asset/img/3.png",
        images: ["asset/img/2.png", "asset/img/3.png", "asset/img/4.png"]
    },
    {
        thumbnail: "asset/img/4.png",
        images: ["asset/img/1.png", "asset/img/2.png", "asset/img/3.png"]
    },
    {
        thumbnail: "asset/img/5.png",
        images: ["asset/img/4.png", "asset/img/5.png", "asset/img/1.png"]
    },
    {
        thumbnail: "asset/img/1.png",
        images: ["asset/img/2.png", "asset/img/3.png", "asset/img/4.png"]
    }
];

let currentPage = 0;
const itemsPerPage = 9;

function renderAlbums() {
    const $gallery = $('#gallery');
    $gallery.empty();

    const start = currentPage * itemsPerPage;
    const end = Math.min(start + itemsPerPage, albums.length);

    for (let i = start; i < end; i++) {
        const album = albums[i];
        const albumId = `album-${i}`;
        const $albumDiv = $(`
            <div class="col-md-4 mb-4">
                <div class="gallery" id="${albumId}">
                    <a href="${album.images[0]}" data-caption="Gambar 1" class="title-link">
                        <div class="card rounded">
                            <img src="${album.thumbnail}" class="card-img-top img-fluid" alt="Thumbnail Album ${i + 1}">
                            <div class="card-body">
                                <p class="card-text text-center">Album ${i + 1}</p>
                            </div>
                        </div>
                    </a>
                </div>
            </div>
        `);

        for (let j = 1; j < album.images.length; j++) {
            $albumDiv.find(`#${albumId}`).append(`
                <a href="${album.images[j]}" data-caption="Gambar ${j + 1}" class="hidden-gallery"></a>
            `);
        }

        $gallery.append($albumDiv);
        baguetteBox.run(`#${albumId}`, { animation: 'fadeIn' });
    }

    $('#prevPage').toggleClass('disabled', currentPage === 0);
    $('#nextPage').toggleClass('disabled', (currentPage + 1) * itemsPerPage >= albums.length);
}

$('#prevPage').on('click', function () {
    if (currentPage > 0) {
        currentPage--;
        renderAlbums();
    }
});

$('#nextPage').on('click', function () {
    if ((currentPage + 1) * itemsPerPage < albums.length) {
        currentPage++;
        renderAlbums();
    }
});

$(document).ready(() => {
    renderAlbums();
});