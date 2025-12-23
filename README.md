১. any, unknown, এবং never টাইপের মধ্যে পার্থক্য
টাইপস্ক্রিপ্টে ডেটা টাইপ হ্যান্ডেল করার জন্য এই তিনটি টাইপ খুবই গুরুত্বপূর্ণ, কিন্তু এদের ব্যবহারের উদ্দেশ্য আলাদা।

any: এটি সবচেয়ে নমনীয় টাইপ। কোনো ভ্যারিয়েবলের টাইপ any দিলে টাইপস্ক্রিপ্ট আর সেটি চেক করে না। এটি মূলত টাইপ সেফটি বন্ধ করে দেয়।

unknown: এটি any এর মতই সব ধরণের ভ্যালু গ্রহণ করে, কিন্তু এটি অনেক বেশি নিরাপদ। unknown টাইপের কোনো ভ্যারিয়েবলের ওপর কোনো কাজ করার আগে আপনাকে অবশ্যই সেটি কী টাইপ তা নিশ্চিত (Type Checking) করে নিতে হবে।

never: এই টাইপটি এমন ভ্যালু নির্দেশ করে যা কখনোই ঘটবে না। সাধারণত কোনো ফাংশন যদি সবসময় এরর থ্রো (Throw Error) করে বা ইনফিনিট লুপে থাকে, তখন তার রিটার্ন টাইপ হয় never।

উদাহরণ:

let valueAny: any = "Hello";
valueAny.toUpperCase(); 
let valueUnknown: unknown = "Hello";

if (typeof valueUnknown === "string") {
    valueUnknown.toUpperCase();ে
}
function throwError(msg: string): never {
    throw new Error(msg); 
}

২. Union এবং Intersection টাইপের ব্যবহার
টাইপস্ক্রিপ্টে একাধিক টাইপকে একত্রে ব্যবহার করার জন্য Union (|) এবং Intersection (&) ব্যবহার করা হয়।

Union Types (|)
যখন একটি ভ্যারিয়েবল একাধিক টাইপের যেকোনো একটি হতে পারে, তখন তাকে Union টাইপ বলে। এটিকে 'OR' লজিক হিসেবে ভাবা যেতে পারে।

উদাহরণ:

let userId: string | number;
userId = 101;     
userId = "id-101"; 
