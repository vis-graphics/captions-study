import {
  Pill,
  Tooltip,
} from '@mantine/core';
import { hsl } from 'd3-color';
import { Tag } from '../types';

export function Pills({ selectedTags, removeFunc }: { selectedTags: Tag[], removeFunc?: (s: string) => void }) {
  return selectedTags.map((tag) => {
    if (!tag || !tag.id) {
      return null;
    }
    const lightness = hsl(tag.color).l;

    return (
      <Tooltip key={tag.id} label={tag.name} withinPortal>
        <Pill
          style={{ width: '80px' }}
          withRemoveButton={!!removeFunc}
          styles={{ root: { backgroundColor: tag.color, color: lightness > 0.7 ? 'black' : 'white' } }}
          onRemove={() => (removeFunc ? removeFunc(tag.id) : null)}
        >
          {tag.name}
        </Pill>
      </Tooltip>
    );
  });
}
