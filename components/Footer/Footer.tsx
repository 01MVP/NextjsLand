import { Logo } from '@/components/Logo/Logo';
import { Newsletter } from "@/components/Newsletter/Newsletter"
import { baseOptions } from '@/app/[lang]/layout.config';
import { Link } from '@/app/i18n/navigation';
import { useTranslations } from 'next-intl';

export function Footer() {
  const t = useTranslations('Footer');
  const { social } = baseOptions

  return (
    <footer className="block">

      <div className="mx-auto w-full max-w-7xl px-5 py-16 md:px-10 md:py-20">

        <div className="grid grid-cols-[auto] justify-between gap-6 max-[991px]:grid-flow-col max-[991px]:[grid-template:'.'_auto_'.'_auto_/_0.75fr_0.75fr_0.75fr] max-[767px]:gap-y-8 max-[479px]:auto-cols-auto max-[479px]:grid-flow-dense sm:grid-cols-2 sm:gap-4 md:grid-cols-[max-content_auto_auto_auto_auto] lg:gap-10">
          <div className="flex max-w-sm grid-cols-1 flex-col items-start justify-start gap-8 max-[991px]:[grid-area:span_1/span_4/span_1/span_4] max-[767px]:flex-col max-[767px]:[grid-area:span_1/span_2/span_1/span_2] lg:mr-10 mb-10 xl:mb-0">
            <div className="flex flex-col items-start gap-6">
              <Logo />
              <p>
                {t('description')}
              </p>
            </div>
            <div className="mt-12 grid w-full max-w-52 grid-flow-col grid-cols-3 mx-auto gap-3 mb-8 md:mb-0">
              {
                social?.map(link => <Link
                  key={link.name}
                  href={link.url}
                  className="mx-auto flex max-w-6 flex-col items-center justify-center text-fd-foreground"
                >
                  {link.icon}
                </Link>
                )
              }
            </div>
          </div>

          <div className="flex flex-col items-start font-semibold">
            <div className="mb-4">
              <p className="font-bold uppercase">Solution</p>
            </div>
            <Link
              href="#"
              className="py-2 text-sm font-normal  transition hover:text-blue-600"
            >
              Marketing
            </Link>
            <Link
              href="#"
              className="py-2 text-sm font-normal  transition hover:text-blue-600"
            >
              Analytics
            </Link>
            <Link
              href="#"
              className="py-2 text-sm font-normal  transition hover:text-blue-600"
            >
              Commerce
            </Link>
            <Link
              href="#"
              className="py-2 text-sm font-normal  transition hover:text-blue-600"
            >
              Insights
            </Link>
          </div>
          <div className="flex flex-col items-start font-semibold">
            <div className="mb-4">
              <p className="font-bold uppercase">Support</p>
            </div>
            <Link
              href="#"
              className="py-2 text-sm font-normal  transition hover:text-blue-600"
            >
              Pricing
            </Link>
            <Link
              href="#"
              className="py-2 text-sm font-normal  transition hover:text-blue-600"
            >
              Documentation
            </Link>
            <Link
              href="#"
              className="py-2 text-sm font-normal transition hover:text-blue-600"
            >
              Guides
            </Link>
            <Link
              href="#"
              className="py-2 text-sm font-normal  transition hover:text-blue-600"
            >
              API&nbsp;Status
            </Link>
          </div>
          <div className="flex flex-col items-start font-semibold">
            <div className="mb-4">
              <p className="font-bold uppercase">Docs</p>
            </div>
            <Link
              href="#"
              className="py-2 text-sm font-normal  transition hover:text-blue-600"
            >
              Pricing
            </Link>
            <Link
              href="#"
              className="py-2 text-sm font-normal  transition hover:text-blue-600"
            >
              API&nbsp;Guide
            </Link>
            <Link
              href="#"
              className="py-2 text-sm font-normal  transition hover:text-blue-600"
            >
              API Status
            </Link>
            <Link
              href="#"
              className="py-2 text-sm font-normal  transition hover:text-blue-600"
            >
              Dev Guide
            </Link>
          </div>
          <div className="flex flex-col items-start font-semibold">
            <div className="mb-4">
              <p className="font-bold uppercase">Comapny</p>
            </div>
            <Link
              href="#"
              className="py-2 text-sm font-normal  transition hover:text-blue-600"
            >
              About
            </Link>
            <Link
              href="#"
              className="py-2 text-sm font-normal  transition hover:text-blue-600"
            >
              Blog
            </Link>
            <Link
              href="#"
              className="py-2 text-sm font-normal  transition hover:text-blue-600"
            >
              Jobs
            </Link>
            <Link
              href="#"
              className="py-2 text-sm font-normal  transition hover:text-blue-600"
            >
              Press
            </Link>
            <Link
              href="#"
              className="py-2 text-sm font-normal  transition hover:text-blue-600"
            >
              Partners
            </Link>
          </div>
        </div>
        {/* Divider */}
        <div className="mb-14 mt-16 w-full border-b border-border" />
        <Newsletter />
        {/* Divider */}
        <div className="mb-14 mt-16 w-full border-b border-border" />
        <div className="flex gap-12 justify-between flex-col md:flex-row  md:items-center">
          <p className="text-sm text-center sm:text-base">
            {t('copyright')}
          </p>
          <div className="text-center font-semibold">
            <Link
              href="#"
              className=" py-2  font-normal transition hover:text-blue-600 px-2.5 ">
              {t('terms')}
            </Link>
            <Link
              href="#"
              className=" py-2 font-normal transition hover:text-blue-600 px-2.5 "
            >
              {t('license')}
            </Link>
            <Link
              href="#"
              className=" py-2  font-normal transition hover:text-blue-600 px-2.5 "
            >
              {t('privacy')}
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

