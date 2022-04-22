import Copyright from './Copyright';
import FooterInfo from './FooterInfo';
import FooterPages from './FooterPages';
import FooterDocs from './FooterDocs';
import FooterNewsletter from './FooterNewsletter';

/**
 * A server component that specifies the content of the footer on the website
 */
export default function Footer({collection, product}) {
  return (
    <footer role="contentinfo" className="relative text-white">
      <div className="bg-black px-5 pt-[70px]">
        <div className="mx-auto flex sm:flex-col md:flex-row md:flex-wrap md:max-w-[720px] xl:max-w-[1170px]">
          <FooterInfo />
          <FooterPages collection={collection} product={product} />
          <FooterDocs />
          <FooterNewsletter />
        </div>
        <Copyright />
      </div>
    </footer>
  );
}
