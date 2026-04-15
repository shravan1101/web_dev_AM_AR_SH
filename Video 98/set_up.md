# 🚀 Tailwind CSS Setup Guide (v4 - Simple & Working)

## 📁 1. Create Project Folder

```bash
mkdir my-project
cd my-project
npm init -y
```

---

## 📦 2. Install Tailwind CLI

```bash
npm install -D tailwindcss @tailwindcss/cli
```

---

## 📁 3. Create Folder Structure

```
my-project/
│
├── src/
│   ├── input.css
│   └── output.css (generated)
│
├── index.html
├── package.json
```

---

## 🎨 4. Setup Tailwind (IMPORTANT)

Open `src/input.css` and add:

```css
@import "tailwindcss";
```

---

## 🧠 5. Create HTML File

Create `index.html`:

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Tailwind Test</title>

    <!-- Link CSS -->
    <link rel="stylesheet" href="./src/output.css" />
  </head>
  <body>
    <h1 class="text-5xl text-blue-500">Hello Tailwind 🚀</h1>
  </body>
</html>
```

---

## ⚙️ 6. Run Tailwind

```bash
npx @tailwindcss/cli -i ./src/input.css -o ./src/output.css --watch
```

👉 Keep this running

---

## ✅ 7. Test

- Open `index.html`
- You should see:
  - Big text
  - Blue color

---

## 🔁 8. Workflow

1. Start Tailwind:

   ```bash
   npx @tailwindcss/cli -i ./src/input.css -o ./src/output.css --watch
   ```

2. Edit HTML

3. Save file (CTRL + S)

4. Refresh browser

---

## ⚠️ Common Errors & Fixes

### ❌ CSS not working

- Check this line in HTML:

  ```html
  <link rel="stylesheet" href="./src/output.css" />
  ```

---

### ❌ output.css is empty

- Make sure `input.css` has:

  ```css
  @import "tailwindcss";
  ```

---

### ❌ Command not working

Run:

```bash
npm install -D tailwindcss @tailwindcss/cli
```

---

### ❌ Wrong folder error

Make sure terminal is inside project:

```bash
cd my-project
```

---

## 🧠 Pro Tip

- Tailwind only generates CSS for classes you use
- Always save your HTML file
- Keep CLI running in watch mode

---

## 🎯 Done!

You now have a working Tailwind setup 🎉
