import { Tag } from "antd"
import "./SuperDrops.css"
import NftCard from "../NftCard/NftCard"

export const ourTabs = [{
        key: 1,
        Tab: <Tag className="tags">Hope Ape</Tag>,
        children:  <NftCard />
    },
    {
        key: 2,
        Tab: <Tag className="tags">Abstract</Tag>,
        children: <NftCard/>
    },
    {
        key: 3,
        Tab: <Tag className="tags">Monkey</Tag>,
        children: <NftCard/>
    },
    {
        key: 4,
        Tab: <Tag className="tags">Cars</Tag>,
        children: <NftCard/>
    },
    {
        key: 5,
        Tab: <Tag className="tags">Art</Tag>,
        children: <NftCard/>
    }

]