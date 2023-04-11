import { chromium, expect, test } from '@playwright/test';


test.afterAll( async ({ page }) => {
 
  await page.close();
  await page.close();
  await page.close();
})

test('assertion', async ({ page }) => {

  const browser = await chromium.launch();

  await page.goto('https://stage-app.modusign.co.kr/');

  await expect(page.getByPlaceholder('이메일')).toHaveCount(1);
  await expect(page.getByPlaceholder('이메일')).toBeVisible();
  await expect(page.getByPlaceholder('이메일')).not.toBeHidden();


  if (await page.getByPlaceholder('이메일')) {

    await page.getByPlaceholder('이메일').fill('joshin7@getnada.com');
  }


  await page.getByPlaceholder('이메일').click();
  await page.getByPlaceholder('이메일').fill('joshin7@getnada.com');
  await page.getByPlaceholder('이메일').press('Tab');
  await page.getByPlaceholder('비밀번호').fill('tlswnsdh2@@');
  await page.getByRole('button', { name: '로그인', exact: true }).click();

  await page.getByTestId('gnbPrimaryButton').click();
  await page.getByRole('button', { name: '계약서 샘플' }).click();
  await page.getByRole('button', { name: ' [샘플] 서명요청 체험문서' }).click();
  await page.getByRole('button', { name: '업로드', exact: true }).click();
  await page.getByRole('button', { name: '확인하고 시작하기' }).click();
  await page.getByRole('button', { name: '서명자 삭제' }).nth(1).click();
  await page.getByRole('button', { name: '삭제' }).click();
  await page.getByPlaceholder('이메일 주소').click();
  await page.getByPlaceholder('이메일 주소').click();
  await page.getByPlaceholder('이메일 주소').click();
  await page.locator('.css-4kd5u8').click();
  await page.getByPlaceholder('이메일 주소').click();
  await page.getByPlaceholder('이메일 주소').fill('joshin1@getnada.com');
  await page.getByRole('button', { name: '다음 단계로' }).click();
  await page.getByRole('button', { name: '+ 텍스트 입력하기' }).click();
  await page.locator('.RequesterFieldBusinessPage__virtual-layer').click();
  await page.getByPlaceholder('추가할 내용을 입력하세요.').click();
  await page.getByPlaceholder('추가할 내용을 입력하세요.').fill('자동화 텍스트 입력');

  await page.getByRole('button', { name: '+ 체크박스 입력하기' }).click();
  await page.locator('.RequesterFieldBusinessPage__virtual-layer').click();
  await page.getByRole('button', { name: '사인/도장(0)' }).click();
  await page.locator('.PDFSetupBusinessPage__virtual-layer').click();
  await page.getByTestId('participant-field-text').click();
  await page.locator('.PDFSetupBusinessPage__virtual-layer').click();
  await page.getByRole('button', { name: '다음 단계로' }).click();

  await page.locator('div').filter({ hasText: /^문서 이름$/ }).locator('svg').click();

  await page.getByText('문서 이름 변경변경할 문서 이름을 입력해 주세요.[샘플] 서명요청 체험문서14 / 100취소적용').click();
  await page.getByPlaceholder('1자 이상 100자 이내').fill('Playwright 실험');
  await page.getByRole('button', { name: '적용' }).click();
  await page.getByRole('checkbox', { name: 'Toggle document password setup' }).click();
  await page.getByPlaceholder('8자 ~ 32자 이내 영문, 숫자, 특수문자').click();
  await page.getByPlaceholder('8자 ~ 32자 이내 영문, 숫자, 특수문자').fill('12341234');
  await page.getByRole('button', { name: '남길 말 입력' }).click();
  await page.getByTestId('limited-text').fill('남길말 입력 해봄');
  await page.getByTestId('limited-text').fill('Playwright 남길말 입력 해봄');
  await page.getByRole('button', { name: '인증 수단 추가' }).click();
  await page.getByRole('button', { name: 'password authentication toggle' }).getByRole('checkbox').check();
  await page.getByPlaceholder('4자 이상 20자 이하').click();
  await page.getByPlaceholder('4자 이상 20자 이하').fill('1234');
  await page.getByPlaceholder('힌트를 입력해 주세요.').click();
  await page.getByPlaceholder('힌트를 입력해 주세요.').fill('1234');
  await page.getByRole('button', { name: '설정하기' }).click();
  await page.getByRole('button', { name: '설정 완료' }).click();
  await page.locator('div').filter({ hasText: /^서명이 모두 완료된 PDF 문서에 비밀번호가 설정됩니다\.확인$/ }).getByLabel('확인').check();
  await page.getByLabel('확인').nth(1).check();
  await page.getByLabel('확인').nth(2).check();
  await page.getByRole('button', { name: '확인' }).click();
  await page.getByLabel('전자서명 개인정보 수집 및 이용에 동의합니다.').check();
  await page.locator('label').filter({ hasText: '서명 요청 시 이용 중인 요금제에 포함된 제공 횟수가 차감됩니다.' }).click();


  await page.getByRole('button', { name: '서명 요청하기' })

  await page.get


})
test('assertion2', async ({ page }) => {

  const browser = await chromium.launch();


  await page.goto('https://stage-app.modusign.co.kr/');

  await page.getByPlaceholder('이메일').click();
  await page.getByPlaceholder('이메일').fill('joshin1@getnada.com');
  await page.getByPlaceholder('이메일').press('Tab');
  await page.getByPlaceholder('비밀번호').fill('tlswnsdh2@@');
  await page.getByRole('button', { name: '로그인', exact: true }).click();

  await page.waitForURL('https://stage-app.modusign.co.kr/documents');


 
  let hi = await page.locator('xpath=(//li[@display="flex"])[1]').textContent();


  let hi2 = await page.locator('xpath=(//li[@display="flex"])[1]');
  let hi3 = await page.getByText('내용 확인하고 서명').first();

  // while (true) {

  //   if (hi == '내 서명 필요') {

  //     console.log(hi)
  //     await expect(hi2).toContainText('내 서명 필요');
  //     await hi2.click();

  //     break;

  //   } else {
  //     await page.pause();
  //     await page.reload();
  //     await page.waitForLoadState("networkidle")



  //   }
  // }


  // for (let i = 0; i < 5; i++) {

  //   if (hi == '내 서명 필요') {

  //     await hi2.waitFor();
  //     console.log(hi)
  //     await hi2.click();
  //     await hi3.waitFor();

  //     break;

  //   } else {
  //     await page.reload()

  //   }
  // }

  await page.getByText('내용 확인하고 서명').first().click();
  //await page.getByRole('listitem').filter({ hasText: /^내용 확인하고 서명$/ }).first();

  await page.getByRole('button', { name: '확인' }).click();

  await page.getByPlaceholder('접근 암호를 입력해주세요.').click();
  await page.getByPlaceholder('접근 암호를 입력해주세요.').fill('1234');
  await page.getByRole('button', { name: '암호 확인' }).click();
  await page.getByRole('button', { name: '서명 시작하기' }).click();
  await page.getByTestId('signature-marker-sign').click();
  await page.locator('.css-967xnx').first().click();
  await page.getByTestId('signature-list-insert-btn').click();
  await page.getByText('내용 입력하기').click();
  await page.getByTestId('text-field-textarea').fill('Playwrigt 자동화 테스트');
  await page.getByTestId('progress-button-bar-complete-button').click();
  await page.getByTestId('contract-agreement-modal-submit-button').click();
  await page.getByRole('button', { name: '홈으로' }).click();

})

