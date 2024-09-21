import DocumentationText from "../Docs/DocumentationText";
import TableOfContents from "../Docs/TableOfContents";

const PageContent =()=>{
<div style={styles.PageContent}>
    <TableOfContents />
    <DocumentationText />
</div>
}

// PageContent is flex to display both the Table of Contents and Documentation
const styles = {
    pageContent:{
        display:'flex',
        padding:'20px',
        flex:1,  // Allows flex grow to take available space
    }
};
export default PageContent;