import {React, useState } from "react";
import "./Main.css";
import Header from './Header';
import Info from './Info';
import backgroundImage from './pic2.jpg'
import Search from './SearchBar';
import './SearchBar.css';
import TextField from "@mui/material/TextField";
import { SearchProvider,useSearch } from './searchContext';
import { List } from "@mui/material";

function Main() { 
    const { searchState, setSearchText } = useSearch();
    console.log(searchState.searchText);
    var searchtext = searchState.searchText;
    const detail = [{
            id: "1",
            name: "Potato Late blight:",
            Fungicide: "Fungicide used are : Ridomil Gold (Metalaxyl 4% + Mancozeb 64%) ",
            link: "Here are the links from where you can purchase this pesticide : ",
            https1: <a href = "https://www.amazon.in/gp/product/B07CTR1ND8/ref=as_li_tl?ie=UTF8&camp=3638&creative=24630&creativeASIN=B07CTR1ND8&linkCode=as2&tag=dps0d-21&linkId=5732d98c6f6da42ae19af91cfd6ed775"
            target = "_blank"
            rel = "noopener noreferrer" > Purchase on Amazon </a>,
            https2: <a href = "https://www.bighaat.com/"
            target = "_blank"
            rel = "noopener noreferrer" > Purchase on BigHaat </a>,
            title: "TREATMENT:",
            treatment: "To keep your garden healthy, choose disease-resistant plants, space them well, and water in the morning. Clean up plant debris after harvest. Use copper fungicide regularly and consider Organocide® Plant Doctor for extra protection. Safely treat fungal problems with bee-friendly SERENADE Garden. Apply Monterey® All Natural Disease Control preventatively.",
            how: "The link is mentioned below from where you can see what is this product and how can farmers use this fungicide :",
            youtube: <a href = "https://www.youtube.com/watch?v=WqQ4cF1km1Q"
            target = "_blank"
            rel = "noopener noreferrer" > Watch it on Youtube </a>,


        },
        {
            id: "2",
            name: "Potato Early blight:",
            Fungicide: "Fungicide used are :  Indofil M-45 (Mancozeb 75% WP)",
            link: "Here are the links from where you can purchase this pesticide :",
            https1: <a href = "https://www.agrowala.com/product/fungicides/indofil-m-45-1-kg"
            target = "_blank"
            rel = "noopener noreferrer" > Purchase on Agrowala </a>,
            https2: <a href = "https://www.bighaat.com/"
            target = "_blank"
            rel = "noopener noreferrer" > Purchase on BigHaat </a>,
            title: "TREATMENT:",
            treatment: "To avoid fungal problems, trim plants for air, clean tools, keep soil tidy with compost and drip watering, use copper fungicides early, apply Bonide® Garden Dust every 7-10 days, and SERENADE Garden as prevention. Clear debris, switch crops, and discard sick parts right away.",
            how: "The link is mentioned below from where you can see what is this product and how can farmers use this fungicide :",
            youtube: <a href = "https://www.youtube.com/watch?v=WqQ4cF1km1Q"
            target = "_blank"
            rel = "noopener noreferrer" > Watch it on Youtube </a>,


        },
        {
            id: "3",
            name: "BellPepper Bacterial spot:",
            Fungicide: "Fungicide used are: Copper-based fungicides(Copper)20% to 50% , Streptomycin sulfate(streptomycin)6% to 25%.",
            link: "Here are the links from where you can purchase this pesticide :",
            https1: <a href = "https://www.amazon.in/gp/product/B07CTR1ND8/ref=as_li_tl?ie=UTF8&camp=3638&creative=24630&creativeASIN=B07CTR1ND8&linkCode=as2&tag=dps0d-21&linkId=5732d98c6f6da42ae19af91cfd6ed775"
            target = "_blank"
            rel = "noopener noreferrer" > Purchase on Amazon </a>,
            https2: <a href = "https://www.bighaat.com/"
            target = "_blank"
            rel = "noopener noreferrer" > Purchase on BigHaat </a>,
            title: "TREATMENT:",
            treatment: "Copper-based fungicides like Bordeaux mixture or copper hydroxide and streptomycin sulfate are commonly used to combat bacterial spot in bell peppers. These treatments, applied through spraying, act as shields against the bacteria, reducing their spread and protecting the plants from further infection.",
            how: "The link is mentioned below from where you can see what is this product and how can farmers use this fungicide :",
            youtube: <a href = "https://www.youtube.com/watch?v=WqQ4cF1km1Q"
            target = "_blank"
            rel = "noopener noreferrer" > Watch it on Youtube </a>,

        },
        {
            id: "4",
            name: "Tomato Bacterial spot:",
            Fungicide: "Fungicide used are: Copper-based fungicides(Copper)20% to 50% , Streptomycin sulfate(streptomycin)6% to 25%.",
            link: "Here are the links from where you can purchase this pesticide :",
            https1: <a href = "https://www.amazon.in/gp/product/B07CTR1ND8/ref=as_li_tl?ie=UTF8&camp=3638&creative=24630&creativeASIN=B07CTR1ND8&linkCode=as2&tag=dps0d-21&linkId=5732d98c6f6da42ae19af91cfd6ed775"
            target = "_blank"
            rel = "noopener noreferrer" > Purchase on Amazon </a>,
            https2: <a href = "https://www.bighaat.com/"
            target = "_blank"
            rel = "noopener noreferrer" > Purchase on BigHaat </a>,
            title: "TREATMENT:",
            treatment: "To tackle tomato bacterial spot, promptly remove infected parts, maintain sanitation, water at the base, choose resistant varieties, and apply fungicides preventively.",
            how: "The link is mentioned below from where you can see what is this product and how can farmers use this fungicide :",
            youtube: <a href = "https://www.youtube.com/watch?v=WqQ4cF1km1Q"
            target = "_blank"
            rel = "noopener noreferrer" > Watch it on Youtube </a>,

        },
        {
            id: "5",
            name: "Tomato Early blight:",
            Fungicide: "Fungicide used are:Chlorothalonil, Mancozeb, and Azoxystrobin(0.5% to 2% metallic copper equivalent (MCE) )",
            link: "Here are the links from where you can purchase this pesticide :",
            https1: <a href = "https://www.amazon.in/gp/product/B07CTR1ND8/ref=as_li_tl?ie=UTF8&camp=3638&creative=24630&creativeASIN=B07CTR1ND8&linkCode=as2&tag=dps0d-21&linkId=5732d98c6f6da42ae19af91cfd6ed775"
            target = "_blank"
            rel = "noopener noreferrer" > Purchase on Amazon </a>,
            https2: <a href = "https://www.bighaat.com/"
            target = "_blank"
            rel = "noopener noreferrer" > Purchase on BigHaat </a>,
            title: "TREATMENT:",
            treatment: "To take care of Tomato Early Blight, remove sick leaves, change where you grow plants, put mulch around them, water near the roots, and give plants enough space to breathe.",
            how: "The link is mentioned below from where you can see what is this product and how can farmers use this fungicide :",
            youtube: <a href = "https://www.youtube.com/watch?v=WqQ4cF1km1Q"
            target = "_blank"
            rel = "noopener noreferrer" > Watch it on Youtube </a>,

        },
        {
            id: "6",
            name: "Tomato Late blight:",
            Fungicide: "Fungicide used are:Chlorothalonil, Mancozeb, and Azoxystrobin(0.5% to 2% metallic copper equivalent (MCE) )",
            link: "Here are the links from where you can purchase this pesticide :",
            https1: <a href = "https://www.amazon.in/gp/product/B07CTR1ND8/ref=as_li_tl?ie=UTF8&camp=3638&creative=24630&creativeASIN=B07CTR1ND8&linkCode=as2&tag=dps0d-21&linkId=5732d98c6f6da42ae19af91cfd6ed775"
            target = "_blank"
            rel = "noopener noreferrer" > Purchase on Amazon </a>,
            https2: <a href = "https://www.bighaat.com/"
            target = "_blank"
            rel = "noopener noreferrer" > Purchase on BigHaat </a>,
            title: "TREATMENT:",
            treatment: "To take care of Tomato Early Blight, remove sick leaves, change where you grow plants, put mulch around them, water near the roots, and give plants enough space to breathe.",
            how: "The link is mentioned below from where you can see what is this product and how can farmers use this fungicide :",
            youtube: <a href = "https://www.youtube.com/watch?v=WqQ4cF1km1Q"
            target = "_blank"
            rel = "noopener noreferrer" > Watch it on Youtube </a>,

        },
        {
            id: "7",
            name: "Tomato Leaf Mold:",
            Fungicide: "Fungicide used are:Chlorothalonil, Mancozeb, and Azoxystrobin(0.5% to 2% metallic copper equivalent (MCE) )",
            link: "Here are the links from where you can purchase this pesticide :",
            https1: <a href = "https://www.amazon.in/gp/product/B07CTR1ND8/ref=as_li_tl?ie=UTF8&camp=3638&creative=24630&creativeASIN=B07CTR1ND8&linkCode=as2&tag=dps0d-21&linkId=5732d98c6f6da42ae19af91cfd6ed775"
            target = "_blank"
            rel = "noopener noreferrer" > Purchase on Amazon </a>,
            https2: <a href = "https://www.bighaat.com/"
            target = "_blank"
            rel = "noopener noreferrer" > Purchase on BigHaat </a>,
            title: "TREATMENT:",
            treatment: "To manage Tomato Leaf Mold: remove infected leaves, ensure good airflow, water at the roots, apply fungicides early, and consider resistant tomato varieties.",
            how: "The link is mentioned below from where you can see what is this product and how can farmers use this fungicide :",
            youtube: <a href = "https://www.youtube.com/watch?v=WqQ4cF1km1Q"
            target = "_blank"
            rel = "noopener noreferrer" > Watch it on Youtube </a>,

        },
        {
            id: "8",
            name: "Tomato Septoria leaf spot:",
            Fungicide: "Fungicide used are:Chlorothalonil, Mancozeb, and Azoxystrobin(0.5% to 2% metallic copper equivalent (MCE) )",
            link: "Here are the links from where you can purchase this pesticide :",
            https1: <a href = "https://www.amazon.in/gp/product/B07CTR1ND8/ref=as_li_tl?ie=UTF8&camp=3638&creative=24630&creativeASIN=B07CTR1ND8&linkCode=as2&tag=dps0d-21&linkId=5732d98c6f6da42ae19af91cfd6ed775"
            target = "_blank"
            rel = "noopener noreferrer" > Purchase on Amazon </a>,
            https2: <a href = "https://www.bighaat.com/"
            target = "_blank"
            rel = "noopener noreferrer" > Purchase on BigHaat </a>,
            title: "TREATMENT:",
            treatment: "To tackle Tomato Septoria Leaf Spot: remove infected leaves, ensure good airflow, water at the base, use fungicides preventatively, and consider resistant tomato varieties if possible.",
            how: "The link is mentioned below from where you can see what is this product and how can farmers use this fungicide :",
            youtube: <a href = "https://www.youtube.com/watch?v=WqQ4cF1km1Q"
            target = "_blank"
            rel = "noopener noreferrer" > Watch it on Youtube </a>,

        },
        {
            id: "9",
            name: "Tomato Spider mites:",
            Fungicide: "Fungicide used are: Abamectin, Spiromesifen, and Hexythiazox",
            link: "Here are the links from where you can purchase this pesticide :",
            https1: <a href = "https://www.amazon.in/gp/product/B07CTR1ND8/ref=as_li_tl?ie=UTF8&camp=3638&creative=24630&creativeASIN=B07CTR1ND8&linkCode=as2&tag=dps0d-21&linkId=5732d98c6f6da42ae19af91cfd6ed775"
            target = "_blank"
            rel = "noopener noreferrer" > Purchase on Amazon </a>,
            https2: <a href = "https://www.bighaat.com/"
            target = "_blank"
            rel = "noopener noreferrer" > Purchase on BigHaat </a>,
            title: "TREATMENT:",
            treatment: "To handle Tomato Spider Mites: Regularly check plants, introduce helpful bugs like ladybugs, wash mites away with water, and use sprays if necessary. These methods help keep mites under control and plants healthy.",
            how: "The link is mentioned below from where you can see what is this product and how can farmers use this fungicide :",
            youtube: <a href = "https://www.youtube.com/watch?v=WqQ4cF1km1Q"
            target = "_blank"
            rel = "noopener noreferrer" > Watch it on Youtube </a>,

        },
        {
            id: "10",
            name: "Tomato Target Spot:",
            Fungicide: "Fungicide used are: Chlorothalonil, Mancozeb, and Azoxystrobin(0.5% to 2% metallic copper equivalent (MCE) )",
            link: "Here are the links from where you can purchase this pesticide :",
            https1: <a href = "https://www.amazon.in/gp/product/B07CTR1ND8/ref=as_li_tl?ie=UTF8&camp=3638&creative=24630&creativeASIN=B07CTR1ND8&linkCode=as2&tag=dps0d-21&linkId=5732d98c6f6da42ae19af91cfd6ed775"
            target = "_blank"
            rel = "noopener noreferrer" > Purchase on Amazon </a>,
            https2: <a href = "https://www.bighaat.com/"
            target = "_blank"
            rel = "noopener noreferrer" > Purchase on BigHaat </a>,
            title: "TREATMENT:",
            treatment: "To manage Tomato Target Spot: remove infected parts, ensure good airflow, water at roots, use fungicides early, and consider resistant tomato varieties if available.",
            how: "The link is mentioned below from where you can see what is this product and how can farmers use this fungicide :",
            youtube: <a href = "https://www.youtube.com/watch?v=WqQ4cF1km1Q"
            target = "_blank"
            rel = "noopener noreferrer" > Watch it on Youtube </a>,

        },
        {
            id: "11",
            name: "Tomato Tomato YellowLeaf Curl Virus:",
            Fungicide: "Fungicide used are: Chlorothalonil, Mancozeb, and Azoxystrobin(0.5% to 2% metallic copper equivalent (MCE) )",
            link: "Here are the links from where you can purchase this pesticide :",
            https1: <a href = "https://www.amazon.in/gp/product/B07CTR1ND8/ref=as_li_tl?ie=UTF8&camp=3638&creative=24630&creativeASIN=B07CTR1ND8&linkCode=as2&tag=dps0d-21&linkId=5732d98c6f6da42ae19af91cfd6ed775"
            target = "_blank"
            rel = "noopener noreferrer" > Purchase on Amazon </a>,
            https2: <a href = "https://www.bighaat.com/"
            target = "_blank"
            rel = "noopener noreferrer" > Purchase on BigHaat </a>,
            title: "TREATMENT:",
            treatment: "To tackle Tomato Yellow Leaf Curl Virus (TYLCV), use resistant tomato varieties, control whitefly populations, remove infected plants, keep weeds in check, and monitor for symptoms regularly. These steps help prevent and manage TYLCV in tomato crops.",
            how: "The link is mentioned below from where you can see what is this product and how can farmers use this fungicide :",
            youtube: <a href = "https://www.youtube.com/watch?v=WqQ4cF1km1Q"
            target = "_blank"
            rel = "noopener noreferrer" > Watch it on Youtube </a>,

        },
        {
            id: "12",
            name: "Tomato mosaic virus:",
            Fungicide: "Tomato Mosaic Virus (ToMV) is a viral disease, and fungicides are not effective against viruses. ",

            title: "TREATMENT:",
            treatment: "To manage Tomato Mosaic Virus (ToMV): use virus-free seeds, practice good sanitation, remove infected plants promptly, control aphids, and consider resistant tomato varieties.",


        },

    ];
    const filteredDetail = detail.filter(item => item.name.includes(searchtext));
    console.log(filteredDetail);
    // const [searchData, setSearchData] = useState("");

    // // Function to handle search
    // const handleSearch = (event) => {
    //     setSearchData(event.target.value);
    // };
    // const filteredDetail = detail.filter((item) => {
    //     return item.name.toLowerCase().includes(searchData.toLowerCase());
    // });

    // const [searchData,setsearchData]=useState("");
    // console.log(searchData);
    //detail={filteredDetail}
    return ( 
        <div className="ui container" >
            <Header />
            <Search />
            <Info detail={filteredDetail} />
        </div >
    );
}

export default Main;