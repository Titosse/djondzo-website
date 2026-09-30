import { siteConfig } from "@/config/site";
export function JsonLd(){const data=[
 {"@context":"https://schema.org","@type":"Organization",name:siteConfig.shortName,url:siteConfig.url,description:siteConfig.description,logo:`${siteConfig.url}/icon.svg`,areaServed:{"@type":"Country",name:"Mozambique"}},
 {"@context":"https://schema.org","@type":"WebSite",name:siteConfig.name,url:siteConfig.url,inLanguage:siteConfig.language,description:siteConfig.description},
 {"@context":"https://schema.org","@type":"SoftwareApplication",name:siteConfig.name,applicationCategory:"EducationalApplication",operatingSystem:"Web, Android",url:siteConfig.url,description:siteConfig.description,offers:{"@type":"Offer",priceCurrency:siteConfig.currency,price:String(siteConfig.pricePerStudent),description:"Preço base por aluno cadastrado por mês."}}
];return <>{data.map((i,n)=><script key={n} type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify(i)}}/>)}</>}
