import MenuLink from './MenuLink';
import MenuLinkGroup from './MenuLinkGroup';
import { links } from '@/config/links';

export default function MenuLinks() {
  return links.map(({ url, name, Icon, links, isEnabled }) => {
    if (!links)
      return (
        <MenuLink
          key={url}
          name={name}
          url={url}
          icon={Icon && <Icon className="text-zinc-600" size={24} />}
          isEnabled={isEnabled}
        />
      );

    return (
      <MenuLinkGroup
        key={url}
        title={name}
        sublinks={links.map(({ url }) => url)}
        leftIcon={Icon && <Icon className="text-zinc-600" size={24} />}
      >
        {links.map(subLink => (
          <MenuLink
            key={subLink.url}
            name={subLink.name}
            url={subLink.url}
            icon={subLink.Icon && <subLink.Icon className="text-zinc-600" size={24} />}
            className="pl-4"
            isEnabled={subLink.isEnabled}
          />
        ))}
      </MenuLinkGroup>
    );
  });
}
