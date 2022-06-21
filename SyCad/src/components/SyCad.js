/* This source code is exported from pxCode, you can get more document from https://www.pxcode.io */
import React from 'react';
import cn from 'classnames';

import styles from './SyCad.module.scss';

export default function SyCad(props) {
  return (
    <div
      style={{ '--src': `url(${require('assets/dfadffb6edcf56e2923fd6a28ebda0f1.png').default})` }}
      className={`sy-cad ${cn(styles.block, styles.block_layout)}`}>
      <div className={cn(styles.cover_block13, styles.cover_block13_layout)}>
        <div className={cn(styles.flex, styles.flex_layout)}>
          <div className={cn(styles.flex1, styles.flex1_layout)}>
            <div className={cn(styles.flex1_item)}>
              <div
                style={{ '--src': `url(${require('assets/59cf69b5e2de8b82142378ffb144c8bc.png').default})` }}
                className={cn(styles.icon, styles.icon_layout)}
              />
            </div>
            <div className={cn(styles.flex1_spacer)} />
            <div className={cn(styles.flex1_item1)}>
              <div
                style={{ '--src': `url(${require('assets/095c14d4096e4bc9bc4ac1d3c22b12d6.png').default})` }}
                className={cn(styles.image1, styles.image1_layout)}
              />
            </div>
            <div className={cn(styles.flex1_spacer)} />
            <div className={cn(styles.flex1_item)}>
              <div
                style={{ '--src': `url(${require('assets/ceb17a19cf75ef9f7385fe67bfcad843.png').default})` }}
                className={cn(styles.icon, styles.icon_layout1)}
              />
            </div>
          </div>

          <h2 className={cn(styles.medium_title1, styles.medium_title1_layout)}>{'Pesquisar paciente'}</h2>

          <div className={cn(styles.flex2, styles.flex2_layout)}>
            <div className={cn(styles.flex2_item)}>
              <div className={cn(styles.cover_block2, styles.cover_block2_layout)}>
                <h2 className={cn(styles.medium_title2, styles.medium_title2_layout)}>{'Número CPF'}</h2>
              </div>
            </div>
            <div className={cn(styles.flex2_spacer)} />
            <div className={cn(styles.flex2_item1)}>
              <div className={cn(styles.cover_block6, styles.cover_block6_layout)}>
                <h2 className={cn(styles.medium_title21_box, styles.medium_title21_box_layout)}>
                  <pre className={cn(styles.medium_title21)}>{'Data consulta '}</pre>
                </h2>
              </div>
            </div>
          </div>

          <div className={cn(styles.cover_block, styles.cover_block_layout)}>
            <h2 className={cn(styles.medium_title2, styles.medium_title2_layout1)}>{'Nome completo'}</h2>
          </div>

          <div className={cn(styles.flex3, styles.flex3_layout)}>
            <div className={cn(styles.flex3_item)}>
              <div className={cn(styles.group, styles.group_layout)}>
                <h2 className={cn(styles.medium_title2, styles.medium_title2_layout2)}>{'Data Nascimento'}</h2>
              </div>
            </div>
            <div className={cn(styles.flex3_spacer)} />
            <div className={cn(styles.flex3_item1)}>
              <div className={cn(styles.cover_block6, styles.cover_block6_layout)}>
                <h2 className={cn(styles.medium_title2, styles.medium_title2_layout)}>{'Gênero'}</h2>
              </div>
            </div>
          </div>

          <div className={cn(styles.cover_block1, styles.cover_block1_layout)}>
            <div className={cn(styles.block1, styles.block1_layout)}>
              <h2 className={cn(styles.medium_title2, styles.medium_title2_layout3)}>{'Endereço'}</h2>
            </div>
          </div>

          <div className={cn(styles.cover_block, styles.cover_block_layout1)}>
            <h2 className={cn(styles.medium_title2, styles.medium_title2_layout4)}>{'E-mail'}</h2>
          </div>

          <div className={cn(styles.flex2, styles.flex2_layout1)}>
            <div className={cn(styles.flex2_item)}>
              <div className={cn(styles.cover_block2, styles.cover_block2_layout)}>
                <h2 className={cn(styles.medium_title2, styles.medium_title2_layout5)}>{'Telefone 1'}</h2>
              </div>
            </div>
            <div className={cn(styles.flex2_spacer)} />
            <div className={cn(styles.flex2_item2)}>
              <div className={cn(styles.cover_block6, styles.cover_block6_layout)}>
                <h2 className={cn(styles.medium_title2, styles.medium_title2_layout6)}>{'Telefone 2'}</h2>
              </div>
            </div>
          </div>

          <div className={cn(styles.cover_block, styles.cover_block_layout2)}>
            <h2 className={cn(styles.medium_title2, styles.medium_title2_layout7)}>{'Médico(s) do paciente'}</h2>
          </div>

          <div className={cn(styles.cover_block5, styles.cover_block5_layout)}>
            <h2 className={cn(styles.medium_title2, styles.medium_title2_layout8)}>{'Informações adicionais'}</h2>
          </div>

          <div className={cn(styles.flex5, styles.flex5_layout)}>
            <div className={cn(styles.flex5_item)}>
              <div className={cn(styles.cover_block12, styles.cover_block12_layout)}>
                <h2 className={cn(styles.medium_title, styles.medium_title_layout)}>{'Desmarcar Consulta'}</h2>
              </div>
            </div>
            <div className={cn(styles.flex5_spacer)} />
            <div className={cn(styles.flex5_item1)}>
              <div className={cn(styles.cover_block11, styles.cover_block11_layout)}>
                <h2 className={cn(styles.medium_title3, styles.medium_title3_layout)}>{'Gerar prontuario'}</h2>

                <div className={cn(styles.cover_block10, styles.cover_block10_layout)}>
                  <h2 className={cn(styles.medium_title4, styles.medium_title4_layout)}>{'Gerar prontuario'}</h2>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

SyCad.inStorybook = true;
