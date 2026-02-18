const fs = require('fs');
const path = require('path');

const songsDir = path.join(__dirname, 'song');
const outputFile = path.join(__dirname, 'songs_manifest.json');

const manifest = {
    albums: {}
};

if (!fs.existsSync(songsDir)) {
    console.error(`Songs directory not found: ${songsDir}`);
    process.exit(1);
}

const albums = fs.readdirSync(songsDir).filter(file => {
    return fs.statSync(path.join(songsDir, file)).isDirectory();
});

albums.forEach(album => {
    const albumPath = path.join(songsDir, album);
    const infoPath = path.join(albumPath, 'info.json');
    const coverPath = path.join(albumPath, 'cover.jpeg');
    
    let info = { title: album, description: "Unkown Album" };
    
    if (fs.existsSync(infoPath)) {
        try {
            const data = fs.readFileSync(infoPath, 'utf8');
            info = JSON.parse(data);
        } catch (err) {
            console.warn(`Could not parse info.json for ${album}`, err);
        }
    }

    const songs = fs.readdirSync(albumPath).filter(file => {
        return file.toLowerCase().endsWith('.mp3');
    });

    manifest.albums[album] = {
        title: info.title || album,
        description: info.description || "Album",
        cover: fs.existsSync(coverPath) ? `song/${album}/cover.jpeg` : null,
        folder: album,
        songs: songs
    };
});

fs.writeFileSync(outputFile, JSON.stringify(manifest, null, 2));
console.log(`Manifest generated at ${outputFile}`);
console.log(`Found ${Object.keys(manifest.albums).length} albums.`);
