import jwt from  "jsonwebtoken";

const generateTokenAndSetCookie =  (userId, res) => {
    const token = jwt.sign({ userId }, process.env.JWT_SECRET,{
        expiresIn: '15d'  //expires in 15 days
    });

    res.cookie("jwt", token ,{
        maxAge: 15 *24*60*60*1000, //15days
        httpOnly: true,    //it means the cookie only accessible through HTTP(not JS)
        sameSite: "strict",    //This makes sure that the cookie is not sent with requests made to a different site.
        secure: process.env.NODE_ENV !== "development",
    });
};

export  default generateTokenAndSetCookie;