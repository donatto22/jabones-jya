import { JabonesLayout } from "../layout/JabonesLayout"
import { Header, TrendingProducts, WhyChooseUs } from "../views"

const JabonesPage = () => {
    return (
        <>
            <JabonesLayout>
                <Header />
                <TrendingProducts/>
                <WhyChooseUs />
            </JabonesLayout>
        </>
        // <ReactFullpage
        // licenseKey='Non open source license'
        // render={({ state, fullpageApi }) => {
        //     return (
        //         <ReactFullpage.Wrapper>
        //             <div className="section">prueba</div>
        //             <div className="section">prueba</div>
        //             <div className="section">prueba</div>
        //             <div className="section">prueba</div>
        //         </ReactFullpage.Wrapper>
        //     )
        // }} />
    )
}

export default JabonesPage