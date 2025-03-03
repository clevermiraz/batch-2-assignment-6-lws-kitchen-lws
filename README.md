আপনাকে অনেক অনেক অভিনন্দন, রিয়্যাক্ট শেষ করে আপনি নেক্সট জেএস এর এসাইনমেন্ট এ আপনি পৌঁছে গিয়েছেন। এটি নেক্সট জেএস উপর আপনার প্রথম এসাইনমেন্ট। আশা করি, রিয়্যাক্ট এবং নেক্সট জেএস সম্পর্কে আপনাদের অনেক ভাল একটি ধারণা হয়েছে । তাই, এই মডিউলে যা যা দেখানো হয়েছে, তার উপর ভিত্তি করে আপনাদের জন্যে এই এসাইনমেন্ট তৈরি করা হয়েছে। এই এসাইনমেন্ট এর জন্য আমরা পূর্বের মত HTML/ Tailwind CSS ব্যবহার করে একটি template তৈরি করে দিয়েছি। আপনাদেরকে এই template ব্যবহার করেই এসাইনমেন্টটি করতে হবে । HTML Template টি গিটহাব রিপোসিটরিতে "dist" folder এর ভিতরে পেয়ে যাবেন।

## এসাইনমেন্টে আপনাকে যা যা করতে হবেঃ

✓ রেসিপি দেখানোর জন্য Structured JSON লিস্ট পাবেন এই 'dist/data' ফোল্ডার এর ভেতরে । এই ফোল্ডারের ভেতরের JSON ফাইল গুলো Parse করে আপনাকে কন্টেন্ট লোড করতে হবে। এই এসাইনমেন্ট এ আপনি Network Call করে কোনো রেসিপি নিয়ে এসে দেখাতে পারবেন না ।

✓ হোম পেজে Super Delicious, Popular Categories, Hand-Picked Collections, Latest Recipes সেকশনে relevent ডেটা দিয়ে রেসিপি গুলো রেন্ডার করতে হবে ।

-   Hero সেকশনে যেকোনো একটি রেসিপি নিয়ে এসে দেখাতে পারেন ।

-   "Super Delicious" সেকশনে রেটিং কাউন্ট এর উপর ভিত্তি করে শুধু মাত্র ৩ টি রেসিপি দেখাতে হবে । প্রত্যেকটি কার্ড এ ক্লিক করলে সেই রেসিপি এর ডিটেইলস পেজে নিয়ে যাবে ।

-   "Popular Categories" সেকশনে ৬/৮টি পপুলার ক্যাটেগরি দেখাতে হবে। যে সকল ক্যাটেগরিতে সব থেকে বেশি রেসিপি আছে, সেগুলার মধ্যে থেকে ৬/৮টি নিয়ে এসে দেখাতে হবে। যেকোনো ক্যাটেগরিতে ক্লিক করলে ঐ ক্যাটেগরির রেসিপি (recipes.html) এর পেজে নিয়ে যাবে

-   Hand-Picked Collections এ আপনি আপনার মত মত যে কোনো দুইটি রেসিপি দেখাতে পারেন ।

-   "Latest Recipes" সেকশনে তারিখের উপর ভিত্তি করে ৪ টি Recent রেসিপি নিয়ে এসে দেখাতে হবে । প্রত্যেকটি কার্ড এ ক্লিক করলে সেই রেসিপি এর ডিটেইলস পেজে নিয়ে যাবে ।

✓ Hero সেকশনের "View Recipe" বাটনে ক্লিক করলে সেই রেসিপি এর ডিটেইলস পেজে নিয়ে যাবে ।

✓ সব সময় রেসিপি এর ডিটেইলস পেজ রাউট এর স্ট্রাকচার হবে - `domain.com/:category/:recipe`

✓ "Popular Categories" সেকশন থেকে "View All" বা Navbar থেকে "Categories" এ ক্লিক করলে ক্যাটেগরি লিস্টিং (_category.html_) পেজে নিয়ে যাবে, সেখানে সব ক্যাটেগরি নিয়ে এসে দেখাতে হবে ।

✓ যে কোনো ক্যাটেগরিতে কিক্ল করলে সেই ক্যাটেগরি ক্যাটেগরির কি কি রেসিপি আছে সেগুলো দেখানোর জন্যে recipes পেজে (_recipes.html_) নিয়ে যাবে । এবং সেই সাথে কত গুলো রেসিপি আছে সেগুলোর একটি সংখ্যা দেখাবে ।

✓ রেসিপি ডিটেইলস পেজে (_blog-details.html_) রেসিপির টাইটেল, লেখকের নাম, পাবলিশ এর তারিখ, ইমেজ এগুলো ডাইনামিক হবে। তবে এই পেজের বাকি কন্টেন্ট ডাইনামিক না করলেও চলবে । লেখকের নাম জন্যে যেকোনো Static ছবি ব্যবহার করলেই চলবে ।

✓ রেসিপি ডিটেইলস পেজে "You might also like" সেকশন এ ক্যাটাগরি এর ভিত্তিতে ৪ টি রেসিপি নিয়ে এসে দেখাতে হবে অর্থাৎ রেসিপি ডিটেইলস পেজে "Meat" ক্যাটেগরির একটি রেসিপি আছে, তাহলে "You might also like" সেকশনে "Meat" ক্যাটেগরির পপুলার কিছু রেসিপি নিয়ে এসে দেখাতে হবে । এবং সেগুলোতে ক্লিক করলেও যেন ঐ রেসিপি এর ডিটেইলস পেজে নিয়ে যায় ।

## কিভাবে সাবমিট করবেন:

সবচেয়ে সহজে বুঝার জন্য [এই ভিডিওটি](https://learnwithsumit.com/rnext/courses/rnext/how-to-submit-assignments-in-reactive-accelerator-course) দেখে ফেলুন।

এসাইনমেন্টে আপনাকে মাত্র দুইটা জিনিস সাবমিট করতে হবে।

1. **GitHub private repository link:** অবশ্যই সঠিক গিটহাব রিপোজিটরি লিংক দিতে হবে। ভুলে অন্য কোনো লিংক দিলে আপনি এসাইনমেন্টের মার্ক পাবেন না তাই সাবমিট করার আগে নিউ ট্যাবে লিংক ওপেন করে চেক করে নিবেন সঠিক লিংক জমা দিচ্ছেন কিনা।
2. **Live site link:** নেটলিফাইতে বা ভার্সেলে সাইট হোস্ট করে সাইটের লাইভ লিংক দিতে হবে। ভুলে অন্য কোনো লিংক দিলে আপনি এসাইনমেন্টের মার্ক পাবেন না তাই সাবমিট করার আগে নিউ ট্যাবে লিংক ওপেন করে চেক করে নিবেন সঠিক লিংক জমা দিচ্ছেন কিনা। নেটলিফাইতে বা ভার্সেলে কি ভাবে হোস্ট করতে হয় তা আপনি না জানলে [এইখানে ক্লিক](https://learnwithsumit.com/rnext/courses/rnext/how-to-deploy-your-project-to-vercel-free) করে দেখে নিতে পারেন।

**সাবমিট একবারই করতে পারবেন তাই ভালো করে দেখে সাবমিট করবেন।**

## GitHub private repository কিভাবে তৈরি করবেন:

Github Private repositoty তৈরি করতে [এইখানে ক্লিক করুন](https://classroom.github.com/a/dpEcJOM1) অথবা ব্রাউজারে এই লিংকে **https://classroom.github.com/a/dpEcJOM1** ভিজিট করুন। লিংকে যাওয়ার পরে **Accept this assignment** এ ক্লিক করুন। সর্বোচ্চ ১ মিনিট পরে পেইজটি রিলোড দিলে আপনি আপনার রিপোজেটরি লিংক পেয়ে যাবেন। মনে রাখবেন, আপনাকে এই লিংকটি আমাদের প্লাটফর্মে সাবমিট করতে হবে। না বুঝলে উপরে বলা ভিডিও টিউটোরিয়ালটি দেখে নিন।

## Assignment এর জন্য প্রয়োজনীয় template HTML:

প্রতিটি assignment এর সাথে প্রয়োজনীয় HTML template আমরা দিয়ে দিয়েছি যেন আপনাকে HTML template নিয়ে সময় নষ্ট না করতে হয়। কোর্সের GitHub repository এর সংশ্লিষ্ট ব্রাঞ্চে গেলেই আপনারা 'dist' folder এর ভিতর HTML template পাবেন। না বুঝলে [এইখানে ক্লিক](https://learnwithsumit.com/rnext/courses/rnext/how-to-submit-assignments-in-reactive-accelerator-course) করে টিউটোরিয়াল দেখে নিতে পারেন।

## এসাইনমেন্ট মার্কস পলিসি:

আপনি নির্ধারিত সময়ে এসাইনমেন্ট জমা দিলে এবং সব কিছু সঠিকভাবে করলে সম্পূর্ণ মার্ক পাবেন। এর পরে জমা দিলে আপনার মার্ক নিচের নিয়মে কাটা যাবে -

1. ডেডলাইনের পরে এক ঘণ্টার মধ্যে জমা দিলে 10% মার্ক কাটা যাবে।
2. ডেডলাইনের পরে এক ঘণ্টার বেশি কিন্তু 24 ঘণ্টার মধ্যে জমা দিলে 30% মার্ক কাটা যাবে।
3. ডেডলাইনের পরে 24 ঘণ্টার বেশি পরে জমা দিলে 50% মার্ক কাটা যাবে।
4. কোর্স ডিউরেশনের পরে আমরা এসাইনমেন্ট গ্রহণ করবো না।

অবশ্যই কোর্স চলাকালিন সময়ে এসাইনমেন্ট জমা দিতে হবে। কোর্সের ডিউরেশন শেষ হয়ে গেলে তার পরে আপনি এসাইনমেন্টে জমা দিলে এসাইনমেন্টের মার্ক পাবেন না।

## সাবমিট করার পর কোড পরিবর্তন:

আপনি ভেবে নিতে পারেন আপনি ওয়েবসাইটে সঠিক সময়ে এসাইনমেন্ট সাবমিট করে নীরবে পরে গিটহাবে কোড পুশ করতে থাকবেন! আপনার গিটহাবের সর্বশেষ কমিট দেখলেই আমরা বুঝতে পারবো আপনি কখন কোড আপডেট করেছেন। সে অনুযায়ী আমরা আপনার মার্ক কেটে নিবো। তাই এসাইনমেন্ট এর সময় পার হবার পরে আমরা আশা করবো আপনি চালাকি করে আর কোড পুশ করবেন না আপনার রিপোজিটরিতে। এটা করলে আপনার সম্পূর্ণ মার্ক কাটা যেতে পারে।

## এসাইনমেন্ট মার্কস কবে পাবেন:

আমরা সর্বোচ্চ ১৫ কার্যদিবসের ভিতরে এসাইনমেন্টের মার্ক দিয়ে দেওয়ার চেষ্টা করবো। ক্ষেত্র বিশেষে একটু দেরি হতে পারে কারো কারো মার্ক পেতে।

### project Guidelines

```bash
npm install
```

-   basically we will manage the project with npm and
    we will follow same structure as we have in the project.

.vscode and .eslintrc

-   we will use eslint for linting and prettier for formatting.

We need eslint and prettier extension in vscode.

-   Install Dev Dependencies for automatic class to className. And Other Hygiene factor

```bash
npm install --save-dev eslint eslint-plugin-react eslint-plugin-react-hooks eslint-plugin-react-refresh
```

```json
    "devDependencies": {
        "eslint": "^8",
        "eslint-config-next": "14.1.0",
        "eslint-plugin-react": "^7.33.2",
        "eslint-plugin-react-hooks": "^4.6.0",
        "eslint-plugin-react-refresh": "^0.4.5"
    }
```

-   If You Prefer liniting (We Are Using AirBnb Linting Rules)
-   Create a `eslint.config.js` file in the project root and enter the below contents:

```js
module.exports = {
    root: true,
    env: { browser: true, es2020: true },
    extends: [
        "next/core-web-vitals",
        "eslint:recommended",
        "plugin:react/recommended",
        "plugin:react/jsx-runtime", // Ensures compatibility with the new JSX Transform
        "plugin:react-hooks/recommended",
    ],
    ignorePatterns: ["dist", ".eslintrc.cjs"],
    parserOptions: { ecmaVersion: "latest", sourceType: "module", ecmaFeatures: { tsx: true } },
    settings: { react: { version: "detect" } }, // Use "detect" to automatically detect React version
    plugins: ["react-refresh"],
    rules: {
        "react/prop-types": "off", // Disable prop-types rule as TypeScript is being used
        "react/jsx-no-target-blank": "off",
        "react-refresh/only-export-components": ["off", { allowConstantExport: true }],
        "no-extra-boolean-cast": "error", // Ensure no unnecessary boolean casting
        "react/react-in-jsx-scope": "off",
    },
};
```
