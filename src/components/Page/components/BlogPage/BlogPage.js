import Page from "../../Page";
import BlogContent from "./components/BlogContent/BlogContent";

const BlogPage = () => (
  <section>
    <div id="blog" className="card">
      <Page foo="Blog" />

      <div className="card-body profile__content">
        <div className="row">
          <BlogContent />
          <BlogContent />
          <BlogContent />
          <BlogContent />
        </div>
      </div>
    </div>
  </section>
);

export default BlogPage;
