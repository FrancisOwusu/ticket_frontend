const PageContent =()=>{
<div style={styles.PageContent}>
    <h3>Hello</h3>
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