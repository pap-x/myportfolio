import React from 'react';

import { BlogCard, CardInfo, ExternalLinks, GridContainer, HeaderThree, Hr, Tag, TagList, TitleContent, UtilityList, Img, Stack } from './ProjectsStyles';
import YoutubeEmbed from '../YoutubeEmbed/YoutubeEmbed.js';
import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';
import { projects } from '../../constants/constants';

const Projects = () => (
  <Section nopadding id="projects">
    <SectionDivider colorAlt divider/>
    <SectionTitle main> Projects</SectionTitle>
    <GridContainer>
      {projects.map(({id, image, video, title, description, tags, source, visit}) => (
        <BlogCard key={id}>
          {video &&
            <YoutubeEmbed embedId={video} />
          }
          {image &&
            <Img src={image} />
          }
          <TitleContent>
            <HeaderThree title>{title}</HeaderThree>
            <Hr />
          </TitleContent>
          <CardInfo>{description}</CardInfo>
          <div>
            <Stack>Stack</Stack>
            <TagList>
              {tags.map((tag, i) => (
                <Tag key={i}>{tag}</Tag>
              ))}
            </TagList>
          </div>
          <UtilityList>
            {visit && <ExternalLinks href={visit}>Code</ExternalLinks>}
            {source && <ExternalLinks href={source}>Source</ExternalLinks>}
          </UtilityList>
        </BlogCard>
      ))}
    </GridContainer>
  </Section>
);

export default Projects;