import { FC } from "react";
import Link, { LinkProps } from "next/link";
import { usePathname } from "next/navigation";
interface HeaderLinkProps extends LinkProps {
  children?: string;
}

const HeaderLink: FC<HeaderLinkProps> = ({ ...props }: HeaderLinkProps) => {
  const pathname = usePathname();
  const styles = pathname === props.children && "font-semibold text-zinc-400";

  return (
    <Link
      className={`hover:text-zinc-300 ${styles ? styles : ""}`}
      {...{ ...props, children: null }}
    >
      {props.children}
    </Link>
  );
};

export default HeaderLink;
